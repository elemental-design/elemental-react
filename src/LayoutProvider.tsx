// @flow
import React, {
  createContext,
  ReactNode,
  ComponentType,
} from 'react';
// import Platform from 'react-primitives';

export interface State {
  breakpoint: number,
};

export interface Value {
  state: State,
  dispatch: ({ }: { type: string, payload: Object }) => void,
};

const initialState = {
  state: {
    breakpoint: 0, // 0 is mobile, 1 is tablet, 2 is desktop
  },
  dispatch: () => {},
};

const LayoutContext = createContext<Value>(initialState);

// const reducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'resize': {
//       return {
//         ...state,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

const LayoutProvider = ({ breakpoint, children }: {
  breakpoint: number,
  children: ReactNode,
}) => {
  // const [state, dispatch] = Platform.OS === 'sketch' ? [{
  //   ...initialState,
  //   breakpoint,
  // }, () => {}] : useReducer(reducer, initialState);
  const state = { breakpoint };
  const dispatch = () => {};
  const value = { state, dispatch };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
};

function withContext<T extends { value: { state: { breakpoint: number } } }>(Component: ComponentType<T>) {
  return React.forwardRef((props: Omit<T, "value">, ref) => (
    <LayoutContext.Consumer>
      {value => <Component forwardedRef={ref} {...props as T} value={value} />}
    </LayoutContext.Consumer>
  ));
};

const LayoutContextConsumer = LayoutContext.Consumer;

export { LayoutProvider, LayoutContext, LayoutContextConsumer, withContext };

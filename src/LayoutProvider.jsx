// @flow
import React, {
  createContext,
  type Node as ReactNode,
} from 'react';
// import Platform from 'react-primitives';


const initialState = {
  breakpoint: 0, // 0 is mobile, 1 is tablet, 2 is desktop
};

// $FlowFixMe
const LayoutContext = createContext();

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

const LayoutContextConsumer = LayoutContext.Consumer;

export { LayoutProvider, LayoutContext, LayoutContextConsumer };

import { useContext } from 'react';

import { State, LayoutContext } from './LayoutProvider';

export const useLayout = (): State => {
  const { state } = useContext(LayoutContext);

  return state;
};

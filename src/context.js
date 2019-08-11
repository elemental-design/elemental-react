import { useContext } from 'react';
import { LayoutContext } from './LayoutProvider';

export const useLayout = () => {
  const [state] = useContext(LayoutContext);

  return state;
};

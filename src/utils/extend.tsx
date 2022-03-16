import React, { FC } from 'react';

export default (Component: FC<any>, fn: Function | Object) => (props: Object) => {
  const styles = typeof fn === 'function' ? fn(props) : fn;

  const baseStyles: { [key: string]: any } = {};
  const pseudoStyles: any = {};

  for (const att in styles) {
    if (styles[att]) {
      const value = styles[att];

      if (att.startsWith(':')) {
        pseudoStyles[att.slice(1)] = value;
      } else {
        baseStyles[att] = value;
      }
    }
  }

  return (
    <Component {...baseStyles} styles={pseudoStyles} {...props} />
  );
};

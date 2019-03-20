// @flow
export const parseAttributes = (...tests: mixed[]) => {
  let obj = {};

  tests.filter(i => i).forEach((test: mixed) => {
    if (typeof test === 'object') {
      obj = {
        ...obj,
        ...test,
      };
    }
  });

  return obj;
};

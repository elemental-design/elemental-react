export const parseAttributes = (...tests: any[]) => {
  let obj = {};

  tests.filter(i => i).forEach((test: any) => {
    if (typeof test === 'object') {
      obj = {
        ...obj,
        ...test,
      };
    }
  });

  return obj;
};

export function parseAttributes<T>(...tests: T[]) {
  let obj = {};

  tests.filter(i => i).forEach((test: T) => {
    if (typeof test === 'object') {
      obj = {
        ...obj,
        ...test,
      };
    }
  });

  return obj;
};

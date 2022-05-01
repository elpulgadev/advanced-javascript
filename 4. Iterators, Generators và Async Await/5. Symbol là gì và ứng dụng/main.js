function myFetch() {
  const promiseObj = {};
  const keyState = Symbol('state');
  const keyResult = Symbol('state');

  promiseObj[keyState] = 50;
  promiseObj[keyResult] = 100;

  return promiseObj;
}

const data = myFetch();
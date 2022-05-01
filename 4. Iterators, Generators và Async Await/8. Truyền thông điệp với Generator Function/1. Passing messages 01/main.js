function* callSum() {
  const a = yield;
  const b = yield;

  return (a + b);
}

const genObj = callSum();

// { value: undefined, done: false }
const data1 = genObj.next();
// { value: undefined, done: false }
const data2 = genObj.next(20);
// { value: 70, done: true }
const data3 = genObj.next(50);

console.log(data1);
console.log(data2);
console.log(data3);

console.log(genObj);

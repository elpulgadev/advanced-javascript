function* callSum() {
  const a = yield (30 + 200); // cộng trước
  const b = yield (60 + 100);

  // const a = (yield 30) + 200;
  // const b = (yield 60) + 100;

  return (a + b);
}

const genObj = callSum();

// const data1 = genObj.next(); // { value: 230, done: false }
// const data2 = genObj.next(20); // { value: 160, done: false }
// const data3 = genObj.next(50); // { value: 70, done: true }

const data1 = genObj.next(); // { value: 30, done: false }
const data2 = genObj.next(20); // { value: 60, done: false }
const data3 = genObj.next(50); // { value: 370, done: true }

console.log(data1);
console.log(data2);
console.log(data3);

console.log(genObj);

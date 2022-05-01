// example 01

// debugger;

// function outerFunc() {
//   let number = 20;
//   let course = 'Javascript nâng cao - ZendVN';

//   console.log('[scope outFunc]', course);

//   function innerFunc() {
//     let number2 = 50;
//     let total = number2 + number;

//     console.log('[scope innerFunc] total', total);

//     return total;
//   }

//   return innerFunc;
// }

// const func = outerFunc();
// const result = func();

// example 02

// function sum(number1) {
//   return number2 => {
//     return (number2 + number1);
//   }
// }

// const value = sum(10)(30);

// console.log('value = ', value);

// example 03

function cached() {
  let count = 0;

  return () => {
    count = count + 1;

    return count;
  };
}

const func = cached();

const value1 = func();
console.log('value1', value1);
const value2 = func();
console.log('value2', value2);
// lưu ý: có cơ chế lưu lại trạng thái trước đó
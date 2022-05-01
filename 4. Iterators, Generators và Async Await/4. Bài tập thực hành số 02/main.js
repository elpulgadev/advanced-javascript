// cách 1:
// const objPerson = {
//   firstName: 'Phi',
//   lastName: 'Nguyễn',
//   age: 27
// };

// objPerson[Symbol.iterator] = function () {
//   let index = 0;
//   let keyArr = Object.keys(objPerson);

//   return {
//     next: function () {
//       let value = `value = ${objPerson[keyArr[index]]}`;
//       let done = !keyArr[index] ? true : false;

//       index += 1;

//       return { value, done };
//     }
//   }
// }

// for (const value of objPerson) {
//   console.log('value = ', value);
// }

// cách 2:
const objPerson = {
  firstName: 'Phi',
  lastName: 'Nguyễn',
  age: 27
};

objPerson[Symbol.iterator] = function () {
  let index = -1;
  let thisJohn = this;
  let listKeys = Object.keys(thisJohn);

  return {
    next: function () {
      index += 1;

      const key = listKeys[index];
      const value = thisJohn[key];
      const done = index > listKeys.length - 1 ? true : false;

      return { value, done };
    }
  }
}

for (const value of objPerson) {
  console.log('value = ', value);
}
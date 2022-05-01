function cloneArrayAndDoSomething(arrInput, func) {
  let arrOutput = [];

  for (let i = 0; i < arrInput.length; i++) {
    arrOutput.push(func(arrInput[i]));
  }

  return arrOutput;
}

const arr = [2, 4, 6];
const handleAdd3 = function (num) {
  return num + 3;
};

const result = cloneArrayAndDoSomething(arr, handleAdd3);

console.log(result);

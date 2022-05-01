function outerFunc() {
  let number = 20;
  let course = "Javascript nâng cao - ZendVN";

  function innerFunc() {
    let number2 = 50;
    let total = number2 + number;

    return total;
  }

  return innerFunc;
}

const func = outerFunc();
const result = func();

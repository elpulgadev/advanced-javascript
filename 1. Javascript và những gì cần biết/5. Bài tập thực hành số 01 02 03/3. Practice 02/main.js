console.log("1. age = ", age); // undefined
var age = 20;
console.log("2. age = ", age); // 20

challange02();

function challange02() {
  console.log("3. age = ", age); // hay sai ở đây
  var age = 50;
  console.log("4. age = ", age);
}

console.log("5. age = ", age);

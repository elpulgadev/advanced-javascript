console.log("1. age = ", age); // undefined
var age = 20;
console.log("2. age = ", age); // 20

let firstName = "Phi";
let lastName = "Nguyễn";
let yearOfBirth = 1990;

console.log("3. callAge()", callAge(yearOfBirth)); // 41
function callAge(year) {
  return 2021 - year;
}
console.log("4. callAge()", callAge(yearOfBirth)); // 41

console.log("5. getFullName", getFullName()); // error
var getFullName = function (firstName, lastName) {
  return firstName + "" + lastName;
};
console.log("6. getFullName()", getFullName()); // Phi Nguyễn

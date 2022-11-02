// start TDZ

console.log(age);
// không thể truy cập age khi chưa gắn giá trị
// thực tế age vẫn có giá trị nhưng nó nằm trong TDZ

let age = 29;

// console.log(age);

{
  // console.log(lastName);
  // console.log(fullName);

  let lastName = "Phi";
  let fullName;

  // console.log(lastName);
  // console.log(fullName);
}

window.hello = "world";
this.course = "Javascript";

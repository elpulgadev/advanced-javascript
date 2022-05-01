// start TDZ
// không thể truy cập age khi chưa console.log(age);
// thực tế age vẫn cố giá trị undefined nhưng nó nằm trong TDZ
let age = 30;

// console.log(age);

{
  // start TDZ

  // không thể truy cập name khi chưa thực thi
  // console.log(name);
  // console.log(fullName);

  let name = 'ZendVn';
  let fullName;

  console.log(name);
  console.log(fullName);
}

window.hello = 'world';
this.course = 'Javascript';

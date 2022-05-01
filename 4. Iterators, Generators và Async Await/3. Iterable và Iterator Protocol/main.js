const arr = [40, 123, 432];

// nếu đã hiện thực phương thức này rồi => object array là 1 object iterable => có thể lặp => có thể dùng for of
// k phải object nào cũng có thể dùng for of => mình có thể tự định nghĩa cho những object khác có thể dùng nó
console.log(arr[Symbol.iterator]);
// => có thể tự viết lại function này để thay đổi hành vi for of dành cho array
arr[Symbol.iterator] = function () {
  let count = 0;

  return {
    next: function () {
      const value = `count: ${count}`;
      const done = count > 10 ? true : false;
      count += 1;

      return { value, done };
    }
  };
}

// bản chất đang dùng iterable và iterator để lấy ra value
// ta có thể sửa lại value bằng cách tự định nghĩa lại function đó
for (const value of arr) {
  console.log('value', value);
}
// yêu cầu
// 1. lặp từng phần tử của array theo thời gian không cố định
// 2. khi nào gọi hàm next() thì sẽ lặp 1 lần
// 3. next() trả về 1 object có value và done
//  - value là giá trị mỗi phần tử
//  - done là giá trị boolean có biết còn lặp lại được không?

function createIterator(arr) {
  let index = 0;

  return {
    next: function () {
      let value = arr[index];

      index += 1;

      return {
        value: value,
        done: done = value ? true : false
      }
    }
  }
}

const listNumber = [41, 21, 53];
const iterator = createIterator(listNumber);

debugger;

// { value: 40, done: false }
const data1 = iterator.next();

console.log('data1 = ', data1);

// { value: 21, done: false }
const data2 = iterator.next();

console.log('data2 = ', data2);

// { value: 53, done: false }
const data3 = iterator.next();

console.log('data3 = ', data3);

// { value: undefined, done: false }
const data4 = iterator.next();

console.log('data4 = ', data4);
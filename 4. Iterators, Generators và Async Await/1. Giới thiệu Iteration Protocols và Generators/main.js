// yêu cầu
// 1. lặp từng phần tử của array theo thời gian không cố định
// 2. khi nào gọi hàm next() thì sẽ lặp 1 lần
// 3. next() trả về 1 object có value và done
//  - value là giá trị mỗi phần tử
//  - done là giá trị boolean có biết còn lặp lại được không?

function createIterator(arr) {
  return {
    next: function() {

    }
  }
}

const listNumber = [41, 21, 53];
const iterator = listNumber(listNumber);

// { value: 40, done: false }
const data1 = iterator.next();

// { value: 21, done: false }
const data2 = iterator.next();

// { value: 53, done: false }
const data3 = iterator.next();

// { value: undefined, done: false }
const data4 = iterator.next();

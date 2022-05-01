function testPromise() {
  setTimeout(() => {
    console.log('7. timeout', 0);
  }, 0);

  console.log('1. Before Promise');

  new Promise((successFn, errorFn) => {
    console.log('2. In Promise');

    successFn(1);
  }).then(response => {
    console.log('5. Then', response);
  });

  console.log('3. After Promise');
}

async function test() {
  await testPromise();
  // khi thực thi xong sẽ thoát khỏi hàm ngay lập tức
  // phải chạy hàm này trước để nhận giá trị - bình thường sẽ return promise nhưng trong trường hợp này là undefined
  // await Promise.resolve(undefined);
  await new Promise(function (resolve) { // để thực thi được tiếp chỗ này khi vào lại hàm thì promise phải được nhận dữ liệu vào giống generator function
    resolve(undefined);
  }); // then này cũng nằm trong micro task queue => sau khi thực thi xong có giá trị undefined

  console.log('6. Test');
}

test();

console.log('4. After test()');
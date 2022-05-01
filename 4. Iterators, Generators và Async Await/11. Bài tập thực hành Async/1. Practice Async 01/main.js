let x = 0;

// chú ý đến trình tự thực thi trong JS
// có áp dụng kiến thức về closure trong JS
// bên trong có thể dùng biến x
async function test() {
  // chú ý khi lần đầu vào hàm này thì x có giá trị 0 nên sau khi nhảy vào lại await thì JS đã đánh giá xong giá trị của biến x
  // x = x + await 2;
  // khi gặp await keyword thì thoát khỏi hàm
  // bản chất ở đây await 2 (nếu dùng array, object, ... cũng tương tự) sẽ tự động chuyển về Promise.resolve(2)
  // => số 2 sẽ được đưa cho kết quả thành công của promise
  // => đưa kết quả cho hàm then
  // => callback của hàm then sẽ chờ trong micro task queue
  // await giống như từ khóa yield
  // tại thời điểm chạy vào lại hàm này thì x có giá trị là 1

  // chú ý thêm trường hợp này
  x = await 2 + x;

  console.log('Line 6: ', x); // 2
}

test(); // 2

x += 1; // 1

console.log('Line 13: ', x); // 1
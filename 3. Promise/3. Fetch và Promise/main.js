// fetch trả về 1 promise, đồng thời gửi sang API xử lý đường link, gọi thông qua network
const promiseObj = fetch('https://api.github.com/users');

console.log(promiseObj);
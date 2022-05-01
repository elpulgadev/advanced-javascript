console.log('1. Hello ZendVN');

function logHelloWord() {
  console.log('3. Hello World');
}

setTimeout(logHelloWord, 3000);

console.log('2. Hello Javascript');

// *** bản thân bên dưới Javascript Runtime sẽ giúp gọi logHelloWord
// *** quy tắc nào khiến JS quản lý thứ tự thực thi
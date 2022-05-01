console.log('1. Hello ZendVN');

function logHelloWorld() {
  console.log('3. Hello World');
}

setTimeout(logHelloWorld, 10000);

function block3Seconds() {
  const start = new Date().getTime();

  while (true) {
    const end = new Date().getTime();

    if (end - start > 3000) {
      console.log('end loop');

      break;
    }
  }
}

block3Seconds();

console.log('2. Hello Javascript');
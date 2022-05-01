setTimeout(() => {
  console.log('setTimeout 1');
}, 0);

queueMicrotask(() => {
  console.log('queueMicrotask1');

  queueMicrotask(() => {
    console.log('queueMicrotask2');

    queueMicrotask(() => {
      console.log('queueMicrotask3');
    });
  });
});

console.log('Hello world');
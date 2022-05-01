// Timout wrapped into Promise API
function timeout(time) {
  return new Promise(function (successFn) {
    function next() {
      successFn();
    }

    setTimeout(next, time);
  });
}

timeout(3000).then(() => {
  console.log('Log after 3000ms');
});

// setInterval thì sao
function interval(time) {
  return new Promise(function (successFn) {
    function next() {
      successFn();
    }

    setInterval(next, time);
  });
}

interval(3000).then(() => {
  console.log('Log very after 3000ms');
});
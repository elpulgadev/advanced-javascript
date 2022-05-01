const promiseObj = fetch('https://api.github.com/users');

// c1
promiseObj.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);

// c2
promiseObj.then(
  (data) => {
    console.log(data);
  }
).catch(
  (error) => {
    console.log(error);
  }
);
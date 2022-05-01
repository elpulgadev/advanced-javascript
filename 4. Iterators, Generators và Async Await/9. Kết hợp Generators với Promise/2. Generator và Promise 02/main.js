function fakeGetData(url, callbackFn) {
  const fakeResponses = {
    'https://zendvn.com/api/1': 'Data 1',
    'https://zendvn.com/api/2': 'Data 2',
    'https://zendvn.com/api/3': 'Data 3'
  };

  const randomMiliseconds = Math.floor(Math.random() * 5000) + 1000;

  console.log(`Đang gọi API: ${url} - Thời gian ${randomMiliseconds}ms`);

  return new Promise((successFn, errorFn) => {
    setTimeout(() => {
      successFn(fakeResponses[url]);
      errorFn(20);
    }, randomMiliseconds);
  });
}

function* handleData() {
  console.log('1. before call API');

  const response = yield fakeGetData('https://zendvn.com/api/1');

  console.log('2. after call API');

  console.log('3. response = ', response);
}

const genObj = handleData();

genObj.next().value.then((result) => {
  genObj.next(result);
});
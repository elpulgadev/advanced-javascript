function fakeGetData(url, callbackFn) {
  const fakeResponses = {
    'https://zendvn.com/api/1': 'Data 1',
    'https://zendvn.com/api/2': 'Data 2',
    'https://zendvn.com/api/3': 'Data 3'
  };

  const randomMiliseconds = Math.floor(Math.random() * 5000) + 1000;

  console.log(`Đang gọi API: ${url} - Thời gian ${randomMiliseconds}ms`);

  setTimeout(() => {
    callbackFn(fakeResponses[url]);
  }, randomMiliseconds);
}

fakeGetData('https://zendvn.com/api/1', function (response1) {
  fakeGetData('https://zendvn.com/api/2', function (response2) {
    fakeGetData('https://zendvn.com/api/3', function (response3) {
      console.log(response1);
      console.log(response2);
      console.log(response3);
    });
  });
});
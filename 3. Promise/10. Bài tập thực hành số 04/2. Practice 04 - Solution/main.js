function fakeGetData(url) {
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

// gọi như thế này thì đồng nghĩa với việc cả 3 lời gọi API phải được chạy cùng 1 lúc
const ps1 = fakeGetData('https://zendvn.com/api/1');
const ps2 = fakeGetData('https://zendvn.com/api/2');
const ps3 = fakeGetData('https://zendvn.com/api/3');

// promise chain
ps1
  .then((data1) => {
    console.log(data1);

    return ps2;
  })
  .then((data2) => {
    console.log(data2);

    return ps3;
  })
  .then((data3) => {
    console.log(data3);
  })
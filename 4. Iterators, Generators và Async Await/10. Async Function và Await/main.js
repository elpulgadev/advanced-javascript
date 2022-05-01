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
      // errorFn('có lỗi xảy ra nghen');
    }, randomMiliseconds);
  });
}

async function handleData() {
  try {
    console.log('1. Trước khi gọi API');

    const response = await fakeGetData('https://zendvn.com/api/1');

    console.log('2. Sau khi gọi API');
    console.log('3. Data sau khi gọi API', response);
  } catch (error) {
    console.error('error: ', error);
  }
}

handleData();

console.log('test');
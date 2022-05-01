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
      // errorFn('có lỗi xảy ra nghen!');
    }, randomMiliseconds);
  });
}

async function handleData() {
  try {
    const response1 = await fakeGetData('https://zendvn.com/api/1');
    const response2 = await fakeGetData('https://zendvn.com/api/2');

    console.log('response1 = ', response1);
    console.log('response2 = ', response2);
  } catch (error) {
    console.error('error: ', error);
  }
}

handleData();
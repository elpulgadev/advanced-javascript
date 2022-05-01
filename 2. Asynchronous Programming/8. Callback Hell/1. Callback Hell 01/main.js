// function demoThrow() {
//   throw new Error('Có lỗi xảy ra');
// }

// try {
//   setTimeout(() => {
//     try {
//       demoThrow();
//     } catch (error) {
//       console.log('Xử lý lỗi với try catch trong setTimeout');
//     }
//   }, 1000);
// } catch (error) {
//   console.log('Xử lý lỗi', error);
// }

// console.log('Đoạn chương trình run ...');

function fakeGetData(url, callbackFn) {
  const fakeResponses = {
    'https://zendvn.com/api/1': 'Data 1',
    'https://zendvn.com/api/2': 'Data 2',
    'https://zendvn.com/api/3': 'Data 3'
  };

  const randomMiliseconds = Math.floor(Math.random() * 5000) + 1000;

  console.log(`Đang gọi API: ${url} - Thời gian ${randomMiliseconds}ms`);

  setTimeout(() => {
    const errorObj = {
      message: 'Có lỗi xảy ra!!!'
    };

    callbackFn(errorObj, fakeResponses[url]);
  }, randomMiliseconds);
}

function startRunAPI(url) {
  let res = null;
  let callback = null;

  fakeGetData(url, function (error, data) {
    if (callback !== null) {
      callback(data);
    } else {
      res = data;
    }
  });

  return function getData(cbFn) {
    if (res !== null) {
      cbFn(res);
    } else {
      callback = cbFn;
    }
  }
}

let fnGetData1 = startRunAPI('https://zendvn.com/api/1');
let fnGetData2 = startRunAPI('https://zendvn.com/api/2');
let fnGetData3 = startRunAPI('https://zendvn.com/api/3');

fnGetData1(function (res1) {
  console.log(res1);

  fnGetData2(function (res2) {
    console.log(res2);

    fnGetData3(function (res3) {
      console.log(res3);
    });
  });
});
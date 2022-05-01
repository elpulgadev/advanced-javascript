// // cách 1

// function fakeGetData(url, callbackFn) {
//   const fakeResponses = {
//     'https://zendvn.com/api/1': 'Data 1',
//     'https://zendvn.com/api/2': 'Data 2',
//     'https://zendvn.com/api/3': 'Data 3'
//   };

//   const randomMiliseconds = Math.floor(Math.random() * 5000) + 1000;

//   console.log(`Đang gọi API: ${url} - Thời gian ${randomMiliseconds}ms`);

//   setTimeout(() => {
//     const errorObj = {
//       message: 'Có lỗi xảy ra!!!'
//     };

//     // callbackFn(null, fakeResponses[url]);
//     callbackFn(errorObj, null);
//   }, randomMiliseconds);
// }

// function myFetch(url) {
//   let res = null;
//   let callback = null;
//   let errorDefault;

//   fakeGetData(url, function (error, data) {
//     if (callback === null) {
//       if (error) {
//         res = error;
//         errorDefault = error;
//       } else {
//         res = data;
//       }
//     } else {
//       if (error) {
//         callback(error);
//       } else {
//         callback(data);
//       }
//     }
//   });

//   return {
//     then: function (success, error) {
//       if (res === null) {
//         if (errorDefault) {
//           callback = error;
//         } else {
//           callback = success;
//         }
//       } else {
//         if (errorDefault) {
//           error(res);
//         } else {
//           success(res);
//         }
//       }
//     }
//   }
// }

// let fakePromise = myFetch('https://zendvn.com/api/1');

// fakePromise.then(
//   (data) => {
//     console.log('data: ', data);
//   },
//   (error) => {
//     console.log('error', error);
//   }
// );

// cách 2

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
    callbackFn(null, fakeResponses[url]);
    // callbackFn(new Error('Có lỗi xảy ra!!!'), null);
  }, randomMiliseconds);
}

function myFetch(url) {
  let res = null;
  let errorDefault = null;
  let callbackSuccess = null;
  let callbackError = null;

  fakeGetData(url, function (error, data) {
    if (callbackSuccess !== null || callbackError !== null) {
      if (error) {
        callbackError(error);
      } else {
        callbackSuccess(data);
      }
    } else {
      res = data;
      errorDefault = error;
    }
  });

  return {
    then: function (successFn, errorFn) {
      if (res !== null || errorDefault !== null) {
        // đã có response trả về
        if (errorDefault !== null) {
          errorFn(errorDefault);
        } else {
          successFn(res);
        }
      } else {
        callbackSuccess = successFn;
        callbackError = errorFn;
      }
    }
  };
}

let fakePromise = myFetch('https://zendvn.com/api/1');

console.log('fakePromise: ', fakePromise);
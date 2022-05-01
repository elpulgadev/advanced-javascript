// example 01

// trong tầm kiểm soát
setTimeout(
  // chúng ta không kiểm soát hàm này (đang giao quyền kiểm soát cho setTimeout), mình không phải là người gọi hàm mà là do javascript runtime
  // mình chỉ lưu nó vào => gửi vào trong setTimeout => gửi sang webAPIs => webAPIs đếm thời gian => gửi xuống callback queue => nếu callstack rỗng mới gửi lên để thực thi
  // setTimeout được xây dựng trong javascript runtime, nó sử dụng tính năng của webAPIs
  () => {
    
  }
, 1000);
// trong tầm kiểm soát

// example 02

import checkoutAnalytics from 'libs';
import chargeCreditCard from 'libs';

const info = {
  // ...
};

// check như vậy ở nhiều nơi => chương trình cồng kềnh => áp dụng promise
let isCharged = false;

checkoutAnalytics(info, function (res) {
  if (isCharged = false) {
    chargeCreditCard(res);
  }

  isCharged = true;
});
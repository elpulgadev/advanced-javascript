console.log('1. Hello ZendVN');

setTimeout(() => {
  console.log('4. Hello setTimeout');
}, 0);

fetch('https://api.github.com/users')
  .then(response => {
    console.log('3. Hello response', response);
  })
  .catch(error => {
    console.log('---. Hello error', response);
  })

console.log('2. Hello Javascript');

// micro task queue có độ ưu tiên cao hơn nên => dòng 9 chạy trước dòng 4 => sai
// phải hiểu rõ về độ ưu tiên: cùng trong cùng thời điểm 2 thằng này nằm trong queue => micro task queue sẽ được chọn => còn trong trường hợp này 2 callback này nằm trong thời điểm khác nhau
// giả sử trong thời điểm 0.1ms => chạy tới dòng setTimeout => gửi function callback => webAPIs => đếm 0s => tại thời điểm 0.1ms nó được chuyển => macro tasks queue => còn fetch tốn khá nhiều thời gian gọi API (nhảy qua server để xử lý) => ví dị cho 1ms (gấp 10 lần) => fetch mới gọi xong => webAPIs mới chuyển function này đến micro tasks queue => 2 thằng này được đưa vào 2 queue ở 2 thời điểm khác nhau => event loop liên tục kiểm tra queue của marcro => micro rỗng => đang nằm trên webAPIs (chờ xử lý xong mới được đưa xuống queue) => setTimeout chạy
// *** độ ưu tiên xét ở đây khi nào đã được đưa vào queue
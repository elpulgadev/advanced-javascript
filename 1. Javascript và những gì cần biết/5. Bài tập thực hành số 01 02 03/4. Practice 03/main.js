var x = 10;

one();

function one() {
  var y = 5;

  two();

  function two() {
    var z = 15;

    three();

    function three() {
      var t = x + y + z;

      console.log("1. x + y + z", t); // 30

      four();
    }
  }
}

function four() {
  var t = 30; // khác t = x + y + z

  console.log("2. x = ", x); // 10
  console.log("3. y = ", y); // error
  console.log("4. z = ", z); // error
  console.log("5. t = ", t); // 30
}

// global: x: 10, one: func, four: func
// local one: y: 5, two: func (có thể sử dụng được 3 biến global do kế thừa => hay gọi là scope chain)
// khi khởi tạo execution context của function one => được thừa kế scope nằm trong tầm vực cha
// local two: z: 15, three (tiếp tục được kế thừa)
// local three: t: undefined
// trong scope này k có x, y, x => đi ra thằng cha tìm => tìm ở trong two() chỉ có z => ra ngoài tìm tiếp => one() chỉ có y => cứ tiếp tục
// gọi function three() => cứ tiếp tục ra ngoài kiếm => three() cùng cấp với one() => lưu ý => scope hình thành dựa vào vị trí khai báo hàm => local four = local one (kế thừa scope của global)
// local four: t: 30, x: 10, one: func, four (chỉ được kế thừa từ global mà thui vì nó được khai báo ở cấp global và ngang với cấp one): func => phục thuộc vào nơi khai báo chứ không phụ thuộc vào nơi gọi hàm

// *** scope được truyền 1 chuỗi dài từ ngoài vào trong lồng nha, phụ thuộc nơi khai báo hàm chứ k phụ thuộc nơi gọi hàm

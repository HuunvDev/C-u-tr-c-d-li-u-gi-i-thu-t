/**Danh sách đặc:
 * danh sách đặc được tổ chức dưới dạng mảng,kích thước trong danh sách mảng là cố định
 * các ô nhớ được tổ chức liên tiếp trong bộ nhớ
 * Ưu điểm:
 * -tìm kiếm nhanh vì nó được tổ chức liên tiếp
 * Nhược điểm:
 * -thao tác thêm và xóa tốn nhiều chi phí vì:khi muốn thêm 1 phần tử vào 1 vị trí trong mảng thì ta
 * phải dịch chuyển tất cả các phần tử lên 1 ô nhớ để chừa 1 ô trống để thêm phần tử mới để đảm bảo tính liên tiếp
 * và xóa phần tử cũng vậy
 *
 * Bài tập:
 * 1.Nhập danh sách
 * 2.Xuất danh sách
 * 3.tìm 1 phần tử trong danh sách
 * 4.Thêm 1 phần tử vào vị trí i trong danh sách
 * 5.Xóa 1 phần tử ở vị trí i;
 */
//tìm phần tử  đầu tiên trong dnah sách:
//cách 1:
let arr1 = [2, 4, 1, 8, 9, 6, 56, 74, 32];
function findElement1(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) return `tim thấy giá trị ${value} tại vị trí ${i}`;
  }
  return `không tìm thấy`;
}
console.log(findElement1(arr1, 6));
console.log(findElement1(arr1, 100));

//cách 2:
let arr2 = [2, 4, 1, 8, 9, 6, 56, 74, 32];
function findElement2(arr, value) {
  return arr.findIndex((element) => element === value);
}
console.log(findElement2(arr2, 6));
console.log(findElement2(arr2, 100));

// tìm phần tử cuối cùng
let arr3 = [2, 4, 1, 8, 1, 6, 56, 1, 32];
function findElement3(arr, value) {
  for (let i = arr.length - 1; i < arr.length; i--) {
    if (arr[i] == value) return `tim thấy giá trị ${value} tại vị trí ${i}`;
  }
  return "không tìm thấy";
}
console.log(findElement3(arr3, 1));
console.log(findElement3(arr3, 100));

// thêm phân tử
/**ví dụ cho mảng arr =[1,4,6,3,7]
 * muốn chèn thêm số 9 vào vị trí thứ 2 thì ta phải dịch chuyển các phần tử từ vị trí thứ 2 lên 1 ô nhớ để chừa ra ô trống để thêm phần tử số 9 vào vị trí thứ 2 --> danh sách đặc
 */
let arr4 = [1, 4, 6, 3, 7];
function addElement(arr, n, index) {
  if (!Array.isArray(arr) || n === null || index > arr.length) return;
  arr.length = 5;
  for (let i = arr.length; i >= index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = n;
  return arr;
}
console.log(addElement(arr4, 9, 2));
console.log(addElement(arr4, null, 7));

//xóa phần tử
let arr5 = [1, 4, 6, 3, 7];
function addElement(arr, n) {
  if (!Array.isArray(arr) || n === null ||n > arr.length) return;
  for (let i = n; i < arr.length ; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return arr;
}
console.log(addElement(arr5, 6));

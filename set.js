//là 1 tập hợp các value -> ko có key
/**
 * các hương thức:
 * new Set() ->khởi tạo Set
 * size -> lấy ra độ dài
 * add(value) -> thêm vào
 * has(value) -> iểm tra có value ko
 * delete(value) -> xóa value
 * clear() -> xoá tất cả
 * forEach(value => {}) lặp qua tất cả các value
 */

const set  = new Set();//khởi tạo

const mySet = new Set([1,2,3,1,2,3]);
console.log(mySet);

function getUniqueWords(sentence) {
    if(sentence = ' ') return [];
    // let myStr = sentence.split(' ');
    console.log( sentence.split(' '));
    // let set = new Set(myStr);
    // return set;
  }

  console.log( getUniqueWords('frontend is easy but easy to die'));


  function test(str){
     if(str == '') return [];
    let myStr = str.split(' ');
    let set  = new Set(myStr);
    let myArr = Array.from(set);
    return myArr;
  }
//   console.log(test('frontend frontend is easy but easy to die'));
  console.log(test(''));
 
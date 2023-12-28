//lưu mọi thông tin theo kiểu object:
/**
 * vd:chúng ta có 1 mảng các danh sách:nếu mỗi lần muốn lấy 1 ptu ra ngoiaf thì chúng ta phải duyệt mảng, điều này sẽ khiến bị lặp đi lặp lại -> nên dùng map lưu theo kiểu object để mỗi lần dùng tới chỉ việc chấm các key của nó cho nhanh:
 * khởi tạo mảng: const map  = newMap();
 * thêm phần tử vào mảng: map.set(key,value)
 * lấy ra map.get(1,2,3...).key;
 */

// const cityList = [
//     {id:1,name:"ha noi"},
//     {id:2, name:"ho chi minh"}
// ];
//sử dụng reduce
// const cityMap = cityList.reduce((map, city) => {
//     map[city.id] = city;
//     return map
// }
// ,{});

// console.log(cityMap);

//sử dụng forEach;
// const cityMap = new Map();//khởi tạo mảng
// cityList.forEach(city => {cityMap.set(city.id, city)})
// console.log(cityMap.size);



const categoryList = [
    { id: 1, name: 'iphone' },
    { id: 2, name: 'macbook' },
  ];
   
function buildCategoryMapV1(categoryList) {
    if(!Array.isArray(categoryList) || categoryList == []) return;
  const obj = categoryList.reduce((map, city) => {
        map[city.id] = city;
        return map
    }
    ,{});
    return obj;
}
console.log(buildCategoryMapV1(categoryList));

//1:Linear search: tìm kiếm tuyến tính:
 const arr1 = [2, 5, 8, 3, 9, 14];
// function LinearSearch(arr, target) {
//     if (!Array.isArray(arr) || arr.length < 0) return -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == target) return i;
//     }
//     return -1;
// }
// console.log(LinearSearch(arr, 18));

//2:Binary Search -> tìm kiếm nhị phân,yêu cầu arr đã dc sắp xếp rồi: sử dụng đệ quy
// function BinarySearch(arr, target, left, right) {
    //     if (!Array.isArray(arr) || arr.length < 0) return -1;
    //     let mid = left + Math.trunc((right - left) / 2); //viết như này để nó không bị lỗi tràn số khi phần tử trong mảng quá lớn -> kết quả nó tương tự như (left + right)/2;
    //     if (right < left) return -1;
    //     if(arr[mid] == target) return mid;
    //     if (target > arr[mid]) return BinarySearch(arr, target, mid + 1, right);
    //     return BinarySearch(arr, target, left, mid - 1);
    // }
    // console.log(BinarySearch(arr, 100,arr[0],arr[arr.length -1]));
    // không sử dung đệ quy:
    
const arr = [2,5,7,9,14,56,86,90];
function BinarySearch(arr, target){
    if(!Array.isArray(arr) || arr.length <=0)return -1;
    let left = 0;
    right = arr.length - 1;
    while(left <= right){
        mid = left + Math.trunc((right - left)/2);
        if(arr[mid] == target) return mid;
        if(target < arr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}
console.log(BinarySearch(arr, 14));

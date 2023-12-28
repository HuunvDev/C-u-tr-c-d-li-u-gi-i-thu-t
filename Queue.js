// cách hoạt động first in -> first out
//phương thức :
//1: thêm vào: enqueue
//2:lấy ra: dequeue
//getFront:lấy ra đầu mảng
//getBack:lấy ra cuối mảng

function createQueue(){
    const queue = [];
    function enqueue(data){
         queue.push(data);
    }
    function dequeue(){
        return queue.shift();
    }
    function getFront(){
        return queue.length > 0 ? queue[0] : undefined;
    }
    function getBack(){
        return queue[queue.length - 1];
    }
    function getSize(){
        return queue.length;
    }
    return {
        enqueue,
        dequeue,
        getBack,
        getFront,
        getSize
    }
}
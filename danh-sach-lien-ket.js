/**Danh sách liên kết có 3 loại:
 * 1.Danh sách liên kết đơn gồm 2 phần thông tin:
 * -Trường chứa nội dung của 1 phần tử
 * -Trường liên kết tới phần tử tiếp theo
 *
 * -danh sách liên kết kép
 * -danh sách liên kết vòng,
 *
 * Danh sách liên kết tổ chức các phần tử rời rạc trong bộ nhớ
 * kích thước tối đa của danh sách liên kết phụ thuộc bộ nhớ khả dụng tren Ram
 * Khuyết điểm:
 * -Tốn chi phí khi tìm kiếm phần tử
 * Ưu điểm:
 * -kích thước danh sách linh động
 * -Thêm  và xóa phân tử dễ dàng
 */

/**
 * Một số thao tác trên danh sách liên kết:
 * 1.Khởi tạo danh sách
 * 2.Tạo 1 node của danh sách
 * 3.Thêm 1 ptu đầu,cuối và sau 1 phần tử chỉ định cho danh sách
 * 4.Duyệt danh sách : gán phần tử head đầu tiên = current,
 * dùng vòng lặp while duyệt chjay từ đầu cho tới khi current = null,
 * vd: let current = head;
 * while(curent!=null){
 * current = current.next;
 * }
 * 
 * 5.Tìm kiếm phần tử trong danh sách
 * 6.Xóa 1 ptu đầu, cuối, và 1 ptu chỉ định trong danh sách
 * 7.Xóa tất cả các ptu trong dnah sách
 */

//1.Khởi tạo danh sách linkedList;

function createLinkedList() {
    let head = null;
    //hàm thêm 1 ptu:
    function insertHead(newData) {
        //1.tạo node mới gồm 2 phần là data và next:
        const newNode = {
            data: newData,
            next: null,
        };
        //TH1:ban đầu chưa có ptu nào thì  head = newNode:
        if (head == null) {
            head = newNode;
            return;
        }
        //TH2:nếu có ptu rồi thì next của phần tử mới thêm vào sẽ bằng head  và  head sẽ thay bằng newNode:
        newNode.next = head;
        head = newNode;
    }
    function printList() {
        //neu ko có ptu thì ko trả về
        if (head == null) return;

        //nếu có ptu rồi thì tạo biến đếm gán = head,
        //lặp cho tới khi nào current.next == null thì thoát ra  vòng lặp rồi in ra kết quả
        let current = head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
    function getHead(){
      return head;
    }

    function getTail(){
      //lặp tới khi nào mà tail.next= null thì dừng lại:
      let tail = head;
      while(tail.next != null){
        tail = tail.next;
      }
      return tail;
    }

    function getSize(){
      let current = head;
      let count = 0;
      while(current != null){
        count++;
        current = current.next;
      }
      return count;
    }

    function findIndexByData(data){
      let current = head;
      if(head== null) return undefined;
      index = 0;
      while(current!=null){
        if(current.data == data)return index;
        index++;
        current = current.next;
      }
    }

    function findWithCallback(callback){
      let current = head;
      if(head== null) return undefined;
      while(current != null){
        if(callback(current.data)) return current.data;
        current = current.next;
      }
    }

    function insertTail(newData){
      newNode={
        data:newData,
        next:null
      }

      if(head== null)return newNode;
      let tail = getTail();
      tail.next = newNode;
      return head;
    }

    function insertPosition(newData,position){
      
      if(head==null || position <= 0){
        insertHead(newData);
        return head;
      }

      size = getSize();
      if(position > size){
        insertTail(newData);
        return head;
      }

      let prev = head;
      let curr = head;
      index=0;
      while(curr != null && index < position){
        prev = curr;
        curr = curr.next;
        index++;
      }

      const newNode ={
        data:newData,
        next:curr
      };
      prev.next = newNode;
      return head;
    }

    function removeHead(){
      if(head != null) return head = head.next;
      return head;
    }
    function removeTail(){
      if(head == null)return null;

      if(head.next == null){
        head = null;
        return head;
      }

      let lastSecond = head;
      while(lastSecond.next.next!= null){
        lastSecond = lastSecond.next;
      }
      lastSecond.next = null;
      return head;
    }
    function removePosition( position){
      if(head==null || position <=0){   
        return  removeHead();
      }
      if(head.next == null){
        head = null;
        return head;
      }
      let prev = head;
      let curr = head;
      index=0;
      while(curr != null && index < position){
        prev = curr;
        curr = curr.next;
        index++;
      }
      prev.next = curr.next;
      return head;
    }
    return {
        insertHead,
        printList,
        getHead,
        getTail,
        getSize,
        findIndexByData,
        findWithCallback,
        insertTail,
        insertPosition,
        removeHead,
        removeTail,
        removePosition
    };
}

const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(6);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(7);
numberLinkedList.insertHead(9);
// console.log("head:",numberLinkedList.getHead());
// console.log("size:",numberLinkedList.getSize());
// console.log("findIndex:",numberLinkedList.findIndexByData(3));
// console.log("findCallback:",numberLinkedList.findWithCallback( x => x % 2 === 0));

numberLinkedList.insertTail(20);
numberLinkedList.insertTail(50);
numberLinkedList.insertPosition(30,-1);
numberLinkedList.insertPosition(70,9);
numberLinkedList.insertPosition(10,3);
numberLinkedList.removeHead();
numberLinkedList.removeTail();
numberLinkedList.removeHead();
numberLinkedList.removePosition(-1);
numberLinkedList.removePosition(2);
numberLinkedList.removePosition(3);
// console.log("tail:",numberLinkedList.getTail());
numberLinkedList.printList();
/**2.các hàm phổ biến của linkedList:
 *getHead(), -> lấy head
 getTail(), -> lâys tail
 getSize(), -> lấy đọ dài
findIndexByData() -> lấy vị trí của ptu dầu tiên tìm thấy
findWidthCallback() -> giống hàm find
 */

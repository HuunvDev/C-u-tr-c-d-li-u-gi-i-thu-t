/**mỗi node có tối đa 2 con
 * node bên trái bao giờ cũng phải bé hơn node root
 * node bên phải bao giờ cũng phải lớn hơn root
 */

//sử dụng đệ quy:
//dãy fibonacci là dãy mà só đứng sau bằng tổng của 2 số đứng trc -->vd: 0,1,1,2,3,5,8,13,21,34... ;
// function  fibonacci(n){
//     if(n <=0) return 0;
//     if(n == 1) return 1;

//     return fibonacci(n-1) + fibonacci(n-2);
// }

// console.log(fibonacci(15));


//sử dụng vòng lặp:
// function fibonacci(n){
//     if(n <=0) return 0;
//     if(n == 1) return 1;

//     let prev = 0;
//     let curr = 1;
//     let i = 2;
//     while( i <= n){
//         next = prev + curr;
//         i++;
//         prev = curr;
//         curr = next;
//     }
//     return next;
// }
// console.log(fibonacci(5));
//1 node sẽ có key,left và right;
function createBinarySearchTree(list){
    let root = null;
    if(Array.isArray(list) && list.length > 0){
        list.forEach(key =>{
            root = insert(root, key);
        })
    }
    function insert(node, key){
        const newNode = {
            key,
            left:null,
            right:null
        }

        if(node == null)return newNode;//ban đầu chưa có gì thì thêm newNode vào
        if(node.key == key)return node;//nếu nhập key trùng vs key của node trc rồi thì sẽ ko thêm mới mà sẽ trả về node cũ vì nó k cho giá trị trùng nhau

        if(key < node.key){
            node.left  = insert(node.left, key)//cho sang trái
        }else{
            node.right = insert(node.right, key);//cho sang phải
        }
        return node;
    }

    function search(node,key){
        if(node == null)return null;

        if( key > node.key) return search(node.right,key);
        if( key < node.key) return search(node.left,key);

        return node;//key = node.key thì return luôn node ý;
    }

    function getMaxNodeCount(node){//tìm xem bên nào có độ dài dài nhất :
        if(node == null) return 0;

        const leftHeight = getMaxNodeCount(node.left)
        const rightHeight = getMaxNodeCount(node.right)
        return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;//khi nào thấy node.left hoặc node.right = null thì cộng dần từ dưới lên trên từ  0 -> + thêm 1;
    }
    function getHeight(){
        const height = getMaxNodeCount(root);
        return height > 0 ? height - 1 : 0; 
    }

    function findMin(node){
        if(node == null) return null;

        let minNode = node;
        while(minNode.left != null){
            minNode = minNode.left;
        }
        return minNode;
    }

    function printNodeArtLevel(node, level){
        if(node == null) return ;
        if(level == 0){
            console.log(node.key);
            return;
        } ;
        printNodeArtLevel(node.left, level - 1)
        printNodeArtLevel(node.right, level - 1)
    }
    function bfs(){
        const height = getHeight();
        for(let i = 0; i< height;i++){
            printNodeArtLevel(root,i);
        }
    }

    function printInOrder(node){
        if(node == null) return;

        printInOrder(node.left);
        console.log(node.key);//root
        printInOrder(node.right);
    }
    function printPreOrder(node){
        if(node == null) return;

        console.log(node.key);//root
        printInOrder(node.left);
        printInOrder(node.right);
    }
    function printPostOrder(node){
        if(node == null) return;

        printInOrder(node.left);
        printInOrder(node.right);
        console.log(node.key);//root
    }
    function remove(node, key){
        if(node == null)return;

        if(key < node.key){
            node.left = remove(node.left, key);
            return node;
        }

        if(node.left == null && node.right == null) return null;
        if(key > node.key){
            node.right = remove(node.right, key);
            return node;
        }

        if(node.left == null){
            node= node.right;
            return node;
        }
        if(node.right == null){
            node= node.left;
            return node;
        }

        //neu co 2 children:
        const minNode = findMin(node.right);
        node.key = remove(node.right, minNode.key);
        return node;
    }
    return {
        root,
        insert,//thêm node
        search,//tìm kiếm
        getHeight,//lấy chiều cao dc tính từ root tới lá xa nhất (tức là node cuối cùng ko có nhánh)
        findMin,//tìm kiếm node nhỏ nhất
        getMaxNodeCount,
        bfs,//duyệt danh sách tree theo tầng
        printInOrder,
        printPostOrder,
        printPreOrder
    }
}

const binaryTree = createBinarySearchTree([10,7,15,5,9,20,13,17]);
// console.log(binaryTree.findMin(binaryTree.root));
// console.log(binaryTree.search(binaryTree.root,15));
console.log(binaryTree.getMaxNodeCount(binaryTree.root));
console.log(binaryTree.getHeight());
console.log(binaryTree.bfs());
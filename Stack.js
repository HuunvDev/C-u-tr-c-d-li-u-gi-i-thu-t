//cách hoạt động :last in -> first out
//phương thức : pop, push

// function createStack(){
//     const stack = [];
//     function push(data){
//         stack.push(data);
//     }
//     function pop(){
//         return stack.pop();
//     }
//     function getTop(){
//         return stack.length > 0 ? stack[stack.length -1] : undefined;
//     }
//     function getSize(){
//         return stack.length;
//     }
//     function isEmpty(){
//         return stack.length === 0;
//     }
//     return {
//         getSize,
//         getTop,
//         isEmpty,
//         push,
//         pop
//     }
// }

function isValidBracketPairs(str) {
  // your code here
  if(str == "") return true;
    stack =[];
  for(let i = 0; i< str.length;i++){
      if(str[i] == '(' || str[i]=='{' || str[i]=='['){
        stack.push(str[i]);
     }
    else{
        top = stack[stack.length - 1];
        if(str[i] == ')'){
            if(top != '('){
                return false;
            }else{
               stack.pop(); 
            }
        }
        if(str[i] == '}'){
            if(top != '{'){
                return false;
            }else{
               stack.pop(); 
            }
        }
        if(str[i] == ']'){
            if(top != '['){
                return false;
            }else{
               stack.pop(); 
            }
        }
      }
    
        // if(stack = [] && (str[i] != ')' || str[i] !='}' || str[i] != ']')){
        //     return true;
        // }else{
        //     return false;
        // }
    }  
    console.log("stack=",stack);
    return true;
}

console.log(isValidBracketPairs('[(a + b) * (c + d)'));
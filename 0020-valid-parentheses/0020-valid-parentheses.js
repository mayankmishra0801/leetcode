/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //  let stk = [];
    //  for(const c of s){
    //     if(c == '(' || c == '{' || c == '['){
    //         stk.push(c);
    // }else if(stk.length == 0 || !match(stk[stk.length-1],c)){
    //      return false;
    // }else{
    //     stk.pop();
    // }
    //  }
    //  return stk.length == 0;



    const stack = [];

    const map = {
        ')' :'(',
        '}' : '{',
        ']' : '['
    };

    for(let ch of s){
        if(ch === '(' || ch === '{' || ch === '['){
            stack.push(ch);
        }else{
            if(stack.pop() !== map[ch]){
                return false;
            }
        }
    }

    return stack.length === 0;
};

// function match(l,r){
//     return (l == '(' && r == ')') || (l == '[' && r == ']') || (l == '{' && r == '}');
// }
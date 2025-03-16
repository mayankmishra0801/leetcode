/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    let stack = [];

    for(let token of tokens){
        if(["+","-","*","/"].includes(token)){
            let b = stack.pop();
            let a = stack.pop();

            let result;

            if(token === "+") result = a+b;
            else if(token === "-") result = a-b;
            else if(token === "*") result = a*b;
            else if(token === "/") result = Math.trunc(a/b);

            stack.push(result);
        }else {
            stack.push(parseInt(token,10));
        }
    }

    return stack.pop();
};
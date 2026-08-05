/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    const graph = Array.from({length : n}, () => []);


    for(const [from,to] of invocations){
        graph[from].push(to);
    }


    const suspicious = new Array(n).fill(false);

    function dfs(method){
        suspicious[method] = true;


        for(const nextMethod of graph[method]){
            if(!suspicious[nextMethod]){
                dfs(nextMethod);
            }
        }
    }

    dfs(k);

    for(const [from,to] of invocations){
        if(!suspicious[from] && suspicious[to]){
            return Array.from({length:n},(_,index)=>index);
        }
    }


    const result = [];


    for(let method = 0;method<n;method++){
        if(!suspicious[method]){
            result.push(method);
        }
    }


    return result;
};
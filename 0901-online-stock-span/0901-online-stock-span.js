
var StockSpanner = function() {
    this.arr = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    let p = [];
    p.push(price);
    while(this.arr.length > 0 && this.arr[this.arr.length-1][0] <= price){
        span += this.arr.pop()[1];
    }
    p.push(span);
    this.arr.push(p)
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
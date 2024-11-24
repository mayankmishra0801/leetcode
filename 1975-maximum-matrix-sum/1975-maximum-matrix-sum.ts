function maxMatrixSum(matrix: number[][]): number {
    
    let negativeCount = 0;
    let sum = 0;
    let minAbsValue = Infinity;
    
    
    for(const row of matrix){
        for(const value of row){
            sum += Math.abs(value);
            minAbsValue = Math.min(minAbsValue,Math.abs(value));
            negativeCount += value < 0 ? 1 : 0;
        }
    }
    
    if(negativeCount % 2 == 0){
        return sum;
    }
    
    return sum - minAbsValue*2;
    
};
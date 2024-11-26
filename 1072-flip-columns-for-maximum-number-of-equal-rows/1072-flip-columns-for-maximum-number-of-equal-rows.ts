function maxEqualRowsAfterFlips(matrix: number[][]): number {
    
    const countMap = new Map<string,number>();
    
    let maxEqualRows = 0;
    
    for(const row of matrix){
        
       // Update the count in the map for the given row pattern.
        // If it doesn't exist yet, initialize to 0 then add 1, else increment the current count.
        if(row[0] === 1){
            // flip by XOR'ing each element in the row with 1.
            for(let i = 0;i< row.length; i++){
                row[i] ^= 1;
            }
        }
    
         // Convert the row to a string to use as a key in the map.
        const rowString = row.join('');
         // Update the count in the map for the given row pattern.
        // If it doesn't exist yet, initialize to 0 then add 1, else increment the current count.
        countMap.set(rowString, (countMap.get(rowString) || 0) + 1);
          // Update maxEqualRows with the maximum of the current value and the new count for this pattern.
        maxEqualRows = Math.max(maxEqualRows, countMap.get(rowString)!);
    }
    // Return the highest frequency of equal row patterns after flips.
    return maxEqualRows;
    
};

const allowedTopBlocks: number[][] = Array(7).fill(0).map(() => Array(7).fill(0));

const memo: Map<string, boolean> = new Map();

function pyramidTransition(bottom: string, allowed: string[]): boolean {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            allowedTopBlocks[i][j] = 0;
        }
    }
  
    memo.clear();
  

    for (const pattern of allowed) {
        const leftBlock = pattern.charCodeAt(0) - 'A'.charCodeAt(0);
        const rightBlock = pattern.charCodeAt(1) - 'A'.charCodeAt(0);
        const topBlock = pattern.charCodeAt(2) - 'A'.charCodeAt(0);
      
      
        allowedTopBlocks[leftBlock][rightBlock] |= (1 << topBlock);
    }
  
 
    return buildPyramid(bottom, "");
}

function buildPyramid(currentRow: string, nextRow: string): boolean {

    if (currentRow.length === 1) {
        return true;
    }
  
    
    if (nextRow.length + 1 === currentRow.length) {
        return buildPyramid(nextRow, "");
    }
  
 
    const stateKey = currentRow + "." + nextRow;
    if (memo.has(stateKey)) {
        return memo.get(stateKey)!;
    }
  
    
    const leftBlockIndex = currentRow.charCodeAt(nextRow.length) - 'A'.charCodeAt(0);
    const rightBlockIndex = currentRow.charCodeAt(nextRow.length + 1) - 'A'.charCodeAt(0);
  
    const possibleBlocks = allowedTopBlocks[leftBlockIndex][rightBlockIndex];
  

    for (let blockIndex = 0; blockIndex < 7; blockIndex++) {
    
        if ((possibleBlocks >> blockIndex) & 1) {
          
            if (buildPyramid(currentRow, nextRow + String.fromCharCode(blockIndex + 'A'.charCodeAt(0)))) {
                memo.set(stateKey, true);
                return true;
            }
        }
    }
  

    memo.set(stateKey, false);
    return false;
}

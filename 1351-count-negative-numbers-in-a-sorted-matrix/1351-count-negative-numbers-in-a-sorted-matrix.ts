function countNegatives(grid: number[][]): number {
       const rows: number = grid.length;
    const cols: number = grid[0].length;
    let totalCount: number = 0;

    for (let row = 0; row < rows; row++) {
        let left: number = 0;
        let right: number = cols - 1;
        let firstTrueIndex: number = -1;

        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2);
            if (grid[row][mid] < 0) {
                firstTrueIndex = mid;
                right = mid - 1; 
            } else {
                left = mid + 1; 
            }
        }

        if (firstTrueIndex !== -1) {
            totalCount += cols - firstTrueIndex;
        }
    }

    return totalCount;
};
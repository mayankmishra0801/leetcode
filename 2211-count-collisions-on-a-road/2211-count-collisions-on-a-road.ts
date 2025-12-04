function countCollisions(directions: string): number {

        const length: number = directions.length;
  

    let leftBoundary: number = 0;
    while (leftBoundary < length && directions[leftBoundary] === 'L') {
        leftBoundary++;
    }
  
  
    let rightBoundary: number = length - 1;
    while (rightBoundary >= 0 && directions[rightBoundary] === 'R') {
        rightBoundary--;
    }
  

    let collisionCount: number = rightBoundary - leftBoundary + 1;
  

    for (let i: number = leftBoundary; i <= rightBoundary; i++) {
        if (directions[i] === 'S') {
            collisionCount--;
        }
    }
  
    return collisionCount;
    
};
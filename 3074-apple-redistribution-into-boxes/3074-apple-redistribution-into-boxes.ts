function minimumBoxes(apple: number[], capacity: number[]): number {
        capacity.sort((a, b) => b - a);
  
    let totalApples = apple.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    for (let boxCount = 1; ; boxCount++) {
        totalApples -= capacity[boxCount - 1];
      
        if (totalApples <= 0) {
            return boxCount;
        }
    }
};
function countPartitions(nums: number[]): number {
        let leftSum: number = 0;
  
   
    let rightSum: number = nums.reduce((accumulator: number, current: number) => accumulator + current, 0);

    let partitionCount: number = 0;
  
  
    for (const currentElement of nums.slice(0, -1)) {
     
        leftSum += currentElement;
        rightSum -= currentElement;
      

        partitionCount += (leftSum - rightSum) % 2 === 0 ? 1 : 0;
    }
  
    return partitionCount;
};
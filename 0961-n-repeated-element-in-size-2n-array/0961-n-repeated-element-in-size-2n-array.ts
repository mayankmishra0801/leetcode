function repeatedNTimes(nums: number[]): number {
     const seenElements: Set<number> = new Set();
  
    for (const currentElement of nums) {
        if (seenElements.has(currentElement)) {
            return currentElement;
        }
        seenElements.add(currentElement);
    }
  

    return -1;
};
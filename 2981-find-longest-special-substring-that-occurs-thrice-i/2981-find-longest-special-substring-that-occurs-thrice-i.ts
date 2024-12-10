function maximumLength(s: string): number {
    const lengthOfString = s.length;
    let leftPointer = 0;
    let rightPointer = lengthOfString;
   
    const doesFragmentSizeWork = (fragmentSize: number): boolean => {
        const letterCounts: number[] = Array(26).fill(0);
        for (let i = 0; i < lengthOfString; ) {
            let endIndex = i + 1;
            while (endIndex < lengthOfString && s[endIndex] === s[i]) {
                endIndex++;
            }
            const letterIndex = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            letterCounts[letterIndex] += Math.max(0, endIndex - i - fragmentSize + 1);
            if (letterCounts[letterIndex] >= 3) {
                return true;
            }
            i = endIndex;
        }
        return false;
    };
  
    while (leftPointer < rightPointer) {
        const midPoint = (leftPointer + rightPointer + 1) >> 1;
        if (doesFragmentSizeWork(midPoint)) {
            leftPointer = midPoint;
        } else { 
            rightPointer = midPoint - 1;
        }
    }
  
    return leftPointer === 0 ? -1 : leftPointer;
}

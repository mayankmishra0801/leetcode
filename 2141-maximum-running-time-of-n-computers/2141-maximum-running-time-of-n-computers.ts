function maxRunTime(n: number, batteries: number[]): number {
      let left = 0n;

    
 
    let right = 0n;


    for (const batteryCapacity of batteries) {
        right += BigInt(batteryCapacity);
    }


    while (left < right) {
   
        const mid = (left + right + 1n) >> 1n;

 
        let totalUsableCapacity = 0n;
        for (const batteryCapacity of batteries) {
        
            totalUsableCapacity += BigInt(Math.min(batteryCapacity, Number(mid)));
        }

      
        if (totalUsableCapacity >= mid * BigInt(n)) {
           
            left = mid;
        } else {
            right = mid - 1n;
        }
    }

    return Number(left);
};
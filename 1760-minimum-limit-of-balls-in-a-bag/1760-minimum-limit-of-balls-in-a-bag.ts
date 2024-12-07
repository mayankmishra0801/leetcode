function minimumSize(nums: number[], maxOperations: number): number {
    let left = 1;
    let right = Math.max(...nums); // Find the maximum number in the array.

    // Use binary search to find the minimum possible largest ball size.
    while (left < right) {
        // Calculate the middle point to test.
        const mid = Math.floor((left + right) / 2);
      
        // Initialize count of operations needed to reduce all balls to `mid` size or smaller.
        let operationsCount = 0;
      
        // Iterate over all the ball sizes.
        for (const ballSize of nums) {
            // Calculate the number of operations to reduce current ball size to `mid` or smaller.
            // The operation consists of dividing the ball size by `mid` and rounding down.
            operationsCount += Math.floor((ballSize - 1) / mid);
        }
      
        // Check if the current `mid` satisfies the maximum operations constraint.
        if (operationsCount <= maxOperations) {
            // If yes, we might have a valid solution; we try smaller `mid` to minimize the largest ball size.
            right = mid;
        } else {
            // Otherwise, `mid` is too small, we increase `mid` to reduce the number of needed operations.
            left = mid + 1;
        }
    }

    // Once the loop ends, the smallest largest ball size is found, which is stored in `left`.
    return left;
}
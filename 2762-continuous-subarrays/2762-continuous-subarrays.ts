function continuousSubarrays(nums: number[]): number {
    let count: number = 0; // This variable holds the total number of continuous subarrays found
    let start: number = 0; // This variable marks the start of the current subarray
    const n: number = nums.length; // Size of the input array
    const windowElements: Set<number> = new Set(); // Set to store unique elements of the current window
    const windowCounts: Map<number, number> = new Map(); // Map to count occurrences of elements in the current window
  
    // Iterate over the input array
    for (let end = 0; end < n; ++end) {
        let element = nums[end];
        // Insert the current element to the windowCounts, or update its count if already present
        windowCounts.set(element, (windowCounts.get(element) || 0) + 1);
        // Insert the current element to the windowElements set
        windowElements.add(element);
      
        // Ensure the difference between the maximum and minimum elements in the windowElements does not exceed 2
        while (Math.max(...windowElements) - Math.min(...windowElements) > 2) {
            // Fetch the element at the 'start' index
            let startElement: number = nums[start];
            let elementCount: number = windowCounts.get(startElement) || 0;
          
            // If only 1 instance of this element exists in the windowCounts, remove it from windowElements
            if (elementCount === 1) {
                windowElements.delete(startElement);
            }
            // Decrease the count of this element in the windowCounts
            windowCounts.set(startElement, elementCount - 1);
          
            // Move start forward as the beginning of the current subarray is no longer valid
            start++;
        }
      
        // Calculate the number of subarrays ending at 'end' and starting from any
        // index from 'start' to 'end', and add to the total count
        count += end - start + 1;
    }
    // Return the final count of continuous subarrays
    return count;
}
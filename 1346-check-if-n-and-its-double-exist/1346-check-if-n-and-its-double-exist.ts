// Function to check if the array contains any element such that 
// an element is double another element in the array.
function checkIfExist(arr: number[]): boolean {
     // Set to keep track of the elements we've seen so far.
    const  seenElements = new Set<number>();
    
    for(const value of arr){
 // Check if we've seen an element that is double the current value
 // or if we've seen an element that is half the current value.
        if(seenElements.has(value*2) || (value%2 === 0 && 
                                        
                                        seenElements.has(value/2))){
 // If such an element exists, return true.
            return true;
        }
 // Add the current value to the set of seen elements.
        seenElements.add(value);
    }

        // If no such pair is found, return false.

    return false;
};
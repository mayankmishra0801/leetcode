function canMakeSubsequence(str1: string, str2: string): boolean {
// sourceString: string, targetString: string
    // Initialize a pointer to track the characters in targetString
    let pointer = 0;
  
    // Get the length of targetString for comparison
    const targetLength = str2.length;
  
    // Loop through the characters of sourceString to check if a subsequence can be made
    for (const sourceChar of str1) {
      
        // Determine the character that follows sourceChar in the alphabet,
        // wrapping around from 'z' to 'a'
        const nextChar = sourceChar === 'z' ? 'a' : String.fromCharCode(sourceChar.charCodeAt(0) + 1);
      
        // If the current character in the targetString matches sourceChar
        // or the next character in the alphabetical sequence,
        // increment the pointer to continue with the next character
        if (pointer < targetLength && (str2[pointer] === sourceChar || str2[pointer] === nextChar)) {
            pointer++;
        }
    }
  
    // A subsequence can be made if the pointer has reached the end of targetString
    return pointer === targetLength;
    
};
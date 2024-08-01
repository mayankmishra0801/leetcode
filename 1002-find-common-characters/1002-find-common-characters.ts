function commonChars(words: string[]): string[] {
    
    //initialize an array to store common characters
    
    let commonCharacters : string[] = [];
    
    let firstWordChars: string[] = [...words[0]];
    
    firstWordChars.forEach((char) => {
        if(words.every((word) => word.includes(char))){
            commonCharacters.push(char);
            words = words.map((word) => word.replace(char,''));
        }
    })
    
    return commonCharacters;
};
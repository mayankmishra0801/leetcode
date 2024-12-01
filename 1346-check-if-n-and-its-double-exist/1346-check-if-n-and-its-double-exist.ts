function checkIfExist(arr: number[]): boolean {
    
    const  seenElements = new Set<number>();
    
    for(const value of arr){
        if(seenElements.has(value*2) || (value%2 === 0 && 
                                        
                                        seenElements.has(value/2))){
            return true;
        }
        
        seenElements.add(value);
    }
    
    return false;
};
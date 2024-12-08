function maxTwoEvents(events: number[][]): number {
   
  events.sort((a,b)=> a[0] - b[0]);
    
    const n:number = events.length;
    
    
    const futureMax:number[] = new Array(n+1).fill(0);
    
    for(let i = n-1;i>=0;--i){
        futureMax[i] = Math.max(futureMax[i+1],events[i][2])
    }

 let answer:number = 0;

    
    events.forEach((event)=>{
        let value = event[2];
        
        let left: number = 0,right:number = n;
        
        while(left < right){
            let mid =   Math.floor((left+right)/2);
            if(events[mid][0] > event[1]){
                right = mid;
            }else{
                left = mid+1;
            }
                
        }

       if(left < n){
           value += futureMax[left];
       }
        
        answer = Math.max(answer,value);
    });
    
    return answer;

};
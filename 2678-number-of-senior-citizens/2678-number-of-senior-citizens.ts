function countSeniors(details: string[]): number {
 const citizens = details.filter((detail:string) =>{
    return Number(detail.slice(-4,-2)) > 60;


 });

 return citizens.length;
};
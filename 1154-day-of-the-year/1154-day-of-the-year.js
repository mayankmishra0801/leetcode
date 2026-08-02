/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let [year,month,day] = date.split('-').map(Number);



    const days = [31,28,31,30,31,30,31,31,30,31,30,31];


    if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
        days[1] = 29;
    }

    for(let i = 0; i<month -1; i++){
        day += days[i];
    }

    return day;
};
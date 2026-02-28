function countBusinessDays(startDateStr, endDateStr) {
    let start = new Date(startDateStr);
    let end = new Date(endDateStr);
    if(start>end) return 0;
    let businessDays=0;
    while(start<=end){
      const dayOfWeek=start.getDay();
      if(dayOfWeek!==0 && dayOfWeek!==6){
        businessDays++
      }
      start.setDate(start.getDate()+1);
    }
    return businessDays;
}

console.log(countBusinessDays("2026-02-21", "2026-03-1"))

// setDate() sets the day of the month of a date.
function largestDifference(skater1, skater2) {
  let max=0;
  let lap=1;
  for(let i=0; i<skater1.length; i++){
    let diff=Math.abs(skater1[i]-skater2[i]);
    if(max<diff){
      lap+=i;
      max=diff;
    }
  }
  return lap;
}

console.log(largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30]))
console.log(largestDifference([27.04, 25.94, 26.22, 26.07, 26.18], [25.59, 25.80, 26.11, 26.01, 26.23]))
console.log(largestDifference([25.82, 25.90, 26.05, 26.00, 26.48], [25.85, 25.92, 26.07, 25.98, 25.95]))

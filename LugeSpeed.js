// function getFastestSpeed(times) {
//   const segment=[320,280,350,300,250];
//   let maxSpeed=0;
//   let segmentNumber=0;
//   for(let i=0; i<times.length; i++){
//     let speed=segment[i]/times[i];
//     if(speed>maxSpeed){
//       segmentNumber=i+1;
//       maxSpeed=speed;
//     }
//   }
//   return `The luger's fastest speed was ${maxSpeed.toFixed(2)} m/s on segment ${segmentNumber}.`;
// }

function getFastestSpeed(times){
  const segment=[320,280,350,300,250];
  const result=times.reduce((acc,cur,index)=>{
    let speed=cur===0?0:segment[index]/cur;
    if(speed>acc.maxSpeed){
      return {maxSpeed:speed,segmentId:index+1};}
    return acc;
  },{maxSpeed:0,segmentId:0})
  return `The luger's fastest speed was ${result.maxSpeed.toFixed(2)} m/s on segment ${result.segmentId}.`;;
}
console.log(getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128]));




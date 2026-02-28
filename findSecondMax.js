function findSecondMax(number){
  const max=Math.max(...number);
  const minArr=number.filter(item=>item<max);
  if(minArr.length==0){
    return "Not Available"
  }
  else{
    const secondMax=Math.max(...minArr);
    return secondMax;
  }
}

console.log(findSecondMax([12,30,10,20,3]))
console.log(findSecondMax([7,7,7]))
console.log(findSecondMax([3,1]))
function findSecondLargest(arr){
  const max=Math.max(...arr);
  const minArr=arr.filter(item=>item<max);
  if(minArr.length==0){
    return "Not Available"
  }
  else{
    const secondMax=Math.max(...minArr);
    return secondMax;
  }
}

console.log(findSecondLargest([12,30,10,20,3]))
console.log(findSecondLargest([7,7,7]))
console.log(findSecondLargest([3,1]))
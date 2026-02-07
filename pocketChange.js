function countChange(change) {
  let total=change.reduce((acc,cur)=>acc+cur,0);
  return `$${(total/100).toFixed(2)}`;
}
console.log(countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25]))
console.log(countChange([25, 10, 5, 1]))
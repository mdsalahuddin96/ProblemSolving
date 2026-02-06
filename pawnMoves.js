function findPawnMoves(position) {
  let col=position[0];
  let row=Number(position[1]);
  const moves=[];
  if(row<8){
    moves.push(col+(row+1));
  }
  if(row===2){
    moves.push(col+(row+2));
  }
  return moves;
  
// My First Try
  let positionX=position[0].charCodeAt(0)-65;
  let positionY=position[1]-1;
  if(positionY===1){
    return [position[0]+`${positionY+2}`, position[0]+`${positionY+3}`]
  }
  else{
    return [position[0]+`${positionY+2}`]
  }
}

console.log(findPawnMoves("E2"))
console.log(findPawnMoves("H4"))
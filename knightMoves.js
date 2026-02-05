
function knightMoves(position) {
  if(position.length!==2) return 0;
  const moves = [
  [2, 1], [2, -1],
  [-2, 1], [-2, -1],
  [1, 2], [1, -2],
  [-1, 2], [-1, -2]
];
let positionArr=[position[0].charCodeAt(0)-65, position[1]-1];

let count=0;
for(let i=0; i<moves.length; i++){
  let newPositionX=positionArr[0]+moves[i][0];
  let newPositionY=positionArr[1]+moves[i][1];
  if(newPositionX>=0&&newPositionX<8&&newPositionY>=0&&newPositionY<8){
    count++;
  }
}
  return count;
}

console.log(knightMoves("E1"))
function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
  const totalPoint=(distancePoints+stylePoints+windComp+kPointBonus);
  const medal={
    0:"Gold",
    1:"Silver",
    2:"Bronze",
  }
  const currentTotalScore=[165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0].sort((a,b)=>b-a);
  for(let i=0; i<currentTotalScore.length; i++){
    if(totalPoint>currentTotalScore[i]){
      if(i>2){
        return "No Medal";
      }
      else return medal[i];
    }
  }
  return "No Medal";
}
console.log(skiJumpMedal(119.0, 50.0, 1.0, 4.0))
console.log(skiJumpMedal(118.0, 50.5, -1.5, 4.0))
console.log(skiJumpMedal(125.0, 5.0, 0.0, 6.0))
function getLandingStance(startStance, rotation) {
  const flipCount=Math.floor(Math.abs(rotation/180));
  if(flipCount%2===0) return startStance;
  return startStance==="Regular"?"Goofy":"Regular";
}
console.log(getLandingStance("Regular", 270));
console.log(getLandingStance("Regular", 90));
console.log(getLandingStance("Goofy", -270));
console.log(getLandingStance("Regular", 2340));
console.log(getLandingStance("Goofy", 2160));
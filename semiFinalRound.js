function getSemifinalMatchups(teams) {
  const result=[];
  for(const team of teams){
    const [teamName,points]=team.split(":");
    const [w,otw,otl,l]=points.split('-').map(Number);
    let totalPoint=w*3+otw*2+otl*1+l*0;
    result.push({Name:teamName,point:totalPoint})
  }
  result.sort((a,b)=>b.point-a.point)
  return `The semi-final games will be ${result[0].Name} vs ${result[3].Name} and ${result[1].Name} vs ${result[2].Name}.`;
}

console.log(getSemifinalMatchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", 
"GER: 1-0-1-3", "SUI: 0-1-3-1", 
"SWE: 1-1-2-1", "USA: 2-1-0-2"]));

// Given an array of 6 ice hockey teams and their records after the round robin games, 
// determine the match-ups for the semi-final round.

//     Each array item will have a team and their record in the format "TEAM: W-OTW-OTL-L". Where:
//         "W" is the number of wins in regulation, worth 3 points each
//         "OTW" is the number of overtime wins, worth 2 points each
//         "OTL" is the number of overtime losses, worth 1 point each
//         "L" is the number of losses, worth 0 points each

// For example, "FIN: 2-2-1-0" would have 11 points after adding up their record.
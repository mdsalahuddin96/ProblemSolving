function scoreCurling(house) {
    const redDistance=[];
    const yellowDistance=[]
    function getDistance(r, c) {
        if (r === 2 && c === 2) return 0; // center
        if (Math.abs(r - 2) <= 1 && Math.abs(c - 2) <= 1) return 1; // ring 1
        return 2; // ring 2
    }
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
            if (house[r][c] === "R") {
                redDistance.push(getDistance(r, c));
            }
            if (house[r][c] === "Y") {
                yellowDistance.push(getDistance(r, c));
            }
        }
    }
    
    const minRedDis=Math.min(...redDistance);
    const minYellowDis=Math.min(...yellowDistance);
    if(minRedDis==minYellowDis) return "No points awarded";
    if(minRedDis<minYellowDis){
        let countR=0;
        for(let dis of redDistance){
            if(dis<minYellowDis)countR++;
        }
        return `R: ${countR}`;
    }
    if(minYellowDis<minRedDis){
        let countY=0;
        for(let dis of yellowDistance){
            if(dis<minRedDis)countY++
        }
        return `Y: ${countY}`
    }
  return yellowDistance;
}
console.log(scoreCurling([[".", ".", "R", ".", "."], [".", ".", ".", ".", "."], 
    [".", ".", "Y", ".", "R"], [".", ".", "Y", "Y", "."], [".", "Y", "R", "R", "."]]))
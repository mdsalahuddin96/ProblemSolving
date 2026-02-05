function separateLettersAndNumbers(str) {
  let newStr="";
  for(let i=0; i<str.length; i++){
    newStr+=str[i];
    if(i<str.length-1&&(isNaN(str[i])!==isNaN(str[i+1]))){
      newStr+="-";
    }
  }
  return newStr;
}
console.log(separateLettersAndNumbers("H3LL0W0RLD"))
console.log(separateLettersAndNumbers("Route66"))
console.log(separateLettersAndNumbers("a1b2c3d4"))
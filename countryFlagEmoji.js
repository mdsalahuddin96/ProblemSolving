function getFlag(countryCode){
  return countryCode.toUpperCase().split("").map(ch=>String.fromCodePoint(127397+ch.charCodeAt(0))).join("");
}
console.log(getFlag("BD"))
console.log(getFlag("AR"))
console.log(getFlag("BR"))

// How flag emojis work?
/*
  They are composed of two regional indicator symbols generated from country code letters.
*/
function countMedals(winners) {
  const table = {};

  for (const [gold, silver, bronze] of winners) {
    
    if (!table[gold]) {
      table[gold] = { gold: 0, silver: 0, bronze: 0, total: 0 };
    }
    if (!table[silver]) {
      table[silver] = { gold: 0, silver: 0, bronze: 0, total: 0 };
    }
    if (!table[bronze]) {
      table[bronze] = { gold: 0, silver: 0, bronze: 0, total: 0 };
    }

    table[gold].gold++;
    table[gold].total++;

    table[silver].silver++;
    table[silver].total++;

    table[bronze].bronze++;
    table[bronze].total++;
  }

  const countries = Object.keys(table);

  countries.sort((a, b) => {
    if (table[b].gold !== table[a].gold) {
      return table[b].gold - table[a].gold;
    }
    return a.localeCompare(b);
  });

  let result = "Country,Gold,Silver,Bronze,Total";

  for (const country of countries) {
    const { gold, silver, bronze, total } = table[country];
    result += `\n${country},${gold},${silver},${bronze},${total}`;
  }

  return result;
}
console.log(countMedals([["USA", "CAN", "NOR"], ["NOR", "USA", "CAN"], ["USA", "NOR", "SWE"]]));
console.log(countMedals([["USA","CAN","NOR"], ["GER","FRA","ITA"], ["JPN","KOR","CHN"], ["SWE","FIN","NOR"], ["CAN","USA","SWE"], ["FRA","GER","ITA"]]));
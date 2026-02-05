function flatten(arr) {
  const result = [];

  function helper(a) {
    for (const item of a) {
      if (Array.isArray(item)) {
        helper(item);
      } else {
        result.push(item);
      }
    }
  }

  helper(arr);
  return result;
}

console.log(flatten([5, [4, [3, 2]], 1]))
console.log(flatten(["A", [[[["B"]]]], "C"]))
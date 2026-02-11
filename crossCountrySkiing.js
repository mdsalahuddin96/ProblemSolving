function toSeconds(time) {
  const [h, m, s] = time.split(":").map(Number);
  return h * 3600 + m * 60 + s;
}

function getRelativeResults(results) {
  const winnerTime = toSeconds(results[0]);
  const final = ["0"];

  for (let i = 1; i < results.length; i++) {
    const diff = toSeconds(results[i]) - winnerTime;

    const minutes = Math.floor(diff / 60);
    const seconds = String(diff % 60).padStart(2, "0");

    final.push(`+${minutes}:${seconds}`);
  }

  return final;
}

console.log(getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]));
console.log(getRelativeResults(["1:00:01", "1:00:05", "1:00:10"]));
console.log(getRelativeResults(["1:10:06", "1:10:23", "1:10:48", "1:12:11"]));
console.log(getRelativeResults(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"]));
console.log(getRelativeResults(["2:01:15", "2:10:45", "2:10:53", "2:11:04", "2:11:55", "2:13:27", "2:14:30", "2:15:10"]));
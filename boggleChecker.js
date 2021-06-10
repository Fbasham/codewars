function boggleChecker(A, s) {
  let q = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] === s[0]) q.push([[i, j]]);
    }
  }
  while (q.length) {
    let a = q.shift();
    for (let [i, j] of [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
      [1, 1],
      [-1, -1],
      [-1, 1],
      [1, -1],
    ]) {
      let [y, x] = [a[a.length - 1][0] + i, a[a.length - 1][1] + j];
      if (y >= 0 && y < A.length && x >= 0 && x < A[0].length) {
        if (a.some(([i, j]) => i === y && j === x)) continue;
        if (s.startsWith(s.slice(0, a.length) + A[y][x])) {
          if (s.slice(0, a.length) + A[y][x] === s) return true;
          q.push([...a, [y, x]]);
        }
      }
    }
  }
  return false;
}

let a = [
  ["I", "L", "A", "W"],
  ["B", "N", "G", "E"],
  ["I", "U", "A", "O"],
  ["A", "S", "R", "L"],
];
console.log(boggleChecker(a, "BINGO"));

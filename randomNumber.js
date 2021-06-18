let a = [],
  b = [];
for (let i = 1; i < 10000; i++) {
  if (i % 3 === 0 || i % 5 === 0) a.push(i);
  else b.push(i);
}

function randomNumber() {
  let n = ~~(Math.random() * 10);
  if (n < 3) return b[~~(Math.random() * b.length)];
  return a[~~(Math.random() * a.length)];
}

console.log(randomNumber());

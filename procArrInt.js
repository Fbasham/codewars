function isPrime(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i < n ** 0.5 + 1; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function divs(n) {
  let r = new Set();
  for (let i = 0; i < n ** 0.5 + 1; i++) {
    if (n % i === 0) {
      r.add(i);
      r.add(n / i);
    }
  }
  return r.size;
}

function procArrInt(a) {
  let x = a.map((e) => [e, divs(e)]).sort((a, b) => b[1] - a[1]);
  return [
    a.length,
    a.filter(isPrime).length,
    [
      x[0][1],
      x
        .filter((e) => e[1] === x[0][1])
        .map((e) => e[0])
        .sort((a, b) => a - b),
    ],
  ];
}

let a = [
  267, 273, 271, 145, 275, 150, 487, 169, 428, 50, 314, 444, 445, 67, 458, 211,
  58, 95, 357, 486, 359, 491, 108, 493, 247, 379,
];
console.log(procArrInt(a));

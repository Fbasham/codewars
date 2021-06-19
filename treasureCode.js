function treasureCode(s) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const g = s.match(/\d+/g).reduce((a, c) => gcd(a, c));
  return s.replace(/\d+/g, (e) => e / g);
}

console.log(treasureCode("Y14U7I7P21"));

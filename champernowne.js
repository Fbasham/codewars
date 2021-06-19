function champernowneDigit(n) {
  if (!Number.isInteger(n) || n < 1) return NaN;
  let c = 10;
  let i = 1;
  while (c < n) {
    i++;
    c += i * 9 * 10 ** (i - 1);
  }
  let s = 10 ** i - 1 - Math.floor((c - n) / i) + "";
  return +s[s.length - 1 - ((c - n) % i)];
}

const lightBulbs = (a, n) =>
  n
    ? lightBulbs(
        [...a.slice(-1), ...a]
          .map((e, i, a) => (a[i - 1] ? e ^ 1 : e))
          .slice(1),
        n - 1
      )
    : a;

console.log(lightBulbs([0, 1, 1, 0, 1, 1], 2));

function treebeard(a) {
  let r = 0;
  function f(a, c = 1) {
    !a.length ? (r = Math.max(r, c)) : a.map((e) => f(e, c + 1, r));
  }
  f(a);
  return r;
}

let a = [[[]], []];
console.log(treebeard(a));

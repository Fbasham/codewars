class Randomizer {
  constructor(min, max) {
    this.a = [...Array(max + 1).keys()]
      .filter((e) => e >= min)
      .sort((a, b) => Math.random() - 0.5);
  }
  next() {
    if (!this.a.length) throw Error();
    return this.a.splice(0, 1)[0];
  }
  sequence(n = 1) {
    if (n > this.a.length) throw Error();
    return this.a.splice(0, n);
  }
}

let r = new Randomizer(5, 10);

console.log(r.sequence());
console.log(r.sequence(2));
console.log(r.sequence(3));
console.log(r.sequence());

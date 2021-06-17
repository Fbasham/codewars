class Lock {
  constructor() {
    this.k = 0;
    this.ks = [];
  }
  createKey() {
    this.ks.push(this.k);
    this.k++;
  }
  check(key) {
    return this.ks.includes(key);
  }
  expire(key) {
    this.ks.filter((e) => e !== key);
  }
}

console.log(new Lock());

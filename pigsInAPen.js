class Game{
  constructor(n){
    this.squares = this._gen_board(n)
    this.lines = []
  }
  _gen_board(n){
    let r = []
    for (let i=1;i<n**3;i+=2*n+1){
      for (let j=0;j<n;j++){
        r.push([i+j,i+j+n,i+j+n+1,i+j+2*n+1])
      }
    }
    return r
  }
  play(lines){
    this.lines = [...lines]
    for (let i=0;i<3;i++){
      for (let sq of this.squares){
        let t = sq.filter(e=>this.lines.includes(e))
        if (t.length===3){
          this.lines =  [...new Set([...this.lines,...sq])]
        }
      }
    }
    return this.lines.sort((a,b)=>a-b)
  }
}

let g = new Game(24)
let lines = [1,21,33,43,48,91,103,116,124,142,150,171,176,205,321,338,349,350,371,377,401,435,442,463,465,483,484,485,521,526,531,553,554,601,628,639,640,671,672,699,702,711,746,775,791,792,836,842,847,906,925,931,944,966,975,1021,1029,1083,1107,1120,1151,1155,1185]
console.log(g.play(lines))
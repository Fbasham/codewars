function treasure(a,x,y){
  q = [[y-1,x-1]], s = []
  while (q.length){
    let [y,x] = q.pop()
    for (let [i,j] of [[0,0],[0,1],[1,0],[0,-1],[-1,0]]){
      let [ty,tx] = [y+i,x+j]
      if (!s.includes(`${ty} ${tx}`) && ty>=0 && ty<a.length && tx>=0 && tx<a[0].length){
        if (!/[NESWX ]/.test(a[ty][tx])) return `The treasure is ${a[ty][tx]} :)`
        if (a[ty][tx]===' ') q.push([ty,tx])
        s.push(`${ty} ${tx}`)
      }
    }
  }
  return 'No treasure found :('
}

const maze = [
  "XXXX",
  "X XX",
  "X TX",
  "XXXX"
]
console.log(treasure(maze,2,3))
function solveMaze(a){
  let [Y,X] = [a.length,a[0].length]
  let q = []
  for (let i=0;i<Y;i++){
    for (let j=0;j<X;j++){
      if (a[i][j]===0 && (j==0 || j==X-1 || i==0 || i==Y-1)){
        q.push([[i,j]])
      }
    }
  }
  let end = q.pop()[0], seen = []
  while (q.length){
    let path = q.pop()
    let [ty,tx] = path[path.length-1]
    for (let [i,j] of [[0,1],[1,0],[-1,0],[0,-1]]){
      let [y,x] = [ty+i,tx+j]
      if (!seen.includes(`${y} ${x}`) && y>=0 && y<Y && x>=0 && x<X && a[y][x]===0){
        if (y===end[0] && x===end[1]){
          let r = [...a];
          ([...path,[y,x]]).forEach(([i,j])=>r[i][j]=2)
          return r
        }
        q.push([...path,[y,x]])
        seen.push(`${y} ${x}`)
      }
    }
  }
}


let a = [ 
  [ 1, 1, 1, 1, 1, 1 ],
  [ 1, 0, 0, 0, 0, 1 ],
  [ 1, 0, 1, 0, 1, 1 ],
  [ 0, 0, 1, 0, 0, 0 ],
  [ 1, 0, 1, 1, 0, 1 ],
  [ 1, 1, 1, 1, 1, 1 ] 
]

console.log(solveMaze(a))
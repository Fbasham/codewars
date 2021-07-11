function howManyBees(a){
  if (!a || !a.length) return 0
  let c = 0, N = a.length, M = a[0].length
  const f=(y,x)=>y>=0 && y<N && x>=0 && x<M
  const g=(i,j,k)=>`${a[i[0]][i[1]]}${a[j[0]][j[1]]}${a[k[0]][k[1]]}`
  for (let i=0;i<a.length;i++){
    for (let j=0;j<a[i].length;j++){
    if (a[i][j]==='b'){
        for (let [dy,dx] of [[0,1],[1,0],[0,-1],[-1,0],[-1,1],[1,-1],[1,1],[-1,-1]]){
          let [[y1,x1],[y2,x2]] = [[i+dy,j+dx],[i+2*dy,j+2*dx]]
          if (f(y1,x1) && f(y2,x2) && g([i,j],[y1,x1],[y2,x2])==='bee') c++
        }
      }
    }
  }
  return c
}
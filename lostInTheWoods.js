function determineOutcome(dims, start, dir){
  const CD = 'NESW', D = {'N':[0,1],'S':[0,-1],'E':[1,0],'W':[-1,0]}
  let p = dir[0]
  if (!Number(dir[1])) dir.splice(1,0,0)
  for (let i=0;i<dir.length;i+=2){
    let [d,n] = [dir[i],dir[i+1]]
    if (i===0) {
      start[0] = start[0]+D[d][0]*n
      start[1] = start[1]+D[d][1]*n
    }
    else {
      p = CD[(4+CD.indexOf(p)+(d==='R' ? 1 : -1))%4]
      start[0] = start[0]+D[p][0]*n
      start[1] = start[1]+D[p][1]*n
    }
  }
  return [start,start.some(e=>e<0) || dims.some((e,i)=>start[i]>e)]
}
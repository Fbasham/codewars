function countDeafRats(a){
  const D={'↘':[1,1],'↓':[1,0],'↙':[1,-1],'→':[0,1],'←':[0,-1],'↗':[-1,1],'↑':[-1,0],'↖':[-1,-1]}
  const f=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1])
  let P=[x=a.findIndex(e=>e.includes('P')),a[x].indexOf('P')]
  let c = 0
  for (let i=0;i<a.length;i++){
    for (let j=0;j<a[i].length;j++){
      if (!/[P ]/.test(a[i][j])){
        let k = a[i][j]
        if (f(P,[i+D[k][0],j+D[k][1]])>f(P,[i,j])) c++
      }
    }
  }
  return c
}
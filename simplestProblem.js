function simplestProblem(a){
  let mn = a.map(e=>Math.min(...e))
  let mx = a.map(e=>Math.max(...e))
  let r = []
  a[0].map((_,i)=>{
    let c = a.reduce((a,c,j)=>a+(mx[j]===c[i] ? -Infinity : mn[j]===c[i] ? 1 : 0),0)
    if (c>=a.length/2) r.push(i)
  })
  return r
}
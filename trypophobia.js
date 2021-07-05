function flat(a){
  let r = []
  for (let e of a){
    if (Array.isArray(e)) r.push(...flat(e))
    else r.push(e)
  }
  return r
  }

function sc(a){
  let d = flat(a).reduce((a,c)=>({...a,[c]:a[c]+1||1}),{})
  let m = Math.max(...Object.values(d))
  return a.map(e=>e.filter(x=>d[x]!==m))
}
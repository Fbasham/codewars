function benford(a) {
  let r = Array(9).fill(0)
  for (let e of a){
    let s = (e+'').replace(/^0.0*/,'')
    r[s[0]-1]++
  }
  return r.map(e=>e/r.reduce((a,c)=>a+c,0))
}
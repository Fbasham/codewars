function testit(a){
  let mn = Math.min(...a)
  let mx = Math.max(...a)
  let r = a.filter(e=>e!==mn && e!==mx)
  return +(r.reduce((a,c)=>a+c,0)/r.length || 0).toFixed(2)
}
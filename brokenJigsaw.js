function brokenJigsaw(p){
  let a = p.map(s=>s.replace(/[^O]/g,''))
  let m = Math.min(...a.map(e=>e.length))
  return a.reduce((a,c)=>a+c.length-m,0)
}
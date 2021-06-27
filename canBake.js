function canBake(avail, recipe) {
  let d = {
    cup:  (v,u)=>v/(u==='g' ? 200 : 220),
    tbsp: (v,u)=>v/(u==='g' ? 14 : 15),
    tsp:  (v,u)=>v/5
  }
  let r = Object.keys(recipe).filter(e=>{
    let [v,u] = recipe[e].split(' ')
    return d[u](...(avail[e]||'').split(' ')) < eval(v) ? e : null
  })
  return r.length ? `Not enough ingredients: need ${r.join(', ')}` : 'You can bake'
}
function treeDPrinter(tree){
  let q = [[0,tree]], r = {}
  while (q.length){
    let [c,n] = q.shift()
    r[c] = r[c] ? [...r[c],n.value] : [n.value]
    if (n.children.length) q.push(...n.children.map(e=>[c+1,e]))
  }
  return Object.values(r).map(e=>e.join(' ')).join('\n')
}
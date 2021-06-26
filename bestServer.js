function bestServer(a){
  const f=a=>a.testdata.filter(e=>e===-1).length
  const g=a=>a.testdata.reduce((a,c)=>a+(c===-1?0:c),0)
  a = a.filter(e=>e.price<=500 && e.testdata.every(x=>x<=300) && f(e)<5)
  a.sort((a,b)=>f(a)-f(b) || g(a)-g(b) || a.price-b.price)
  return a.length ? a[0].name : ''
}
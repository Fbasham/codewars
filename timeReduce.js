function totalTime(a){
  const f=s=>s.split(':').reverse().reduce((a,c,i)=>a+60**i*c,0)
  let t = a.reduce((a,c)=>a+f(c),0)
  let [d,th] = [~~(t/86400),t%86400]
  let [h,tm] = [~~(th/3600),th%3600]
  let [m,s] = [~~(tm/60),t%60]
  let r = [[d,'day'],[h,'hour'],[m,'minute'],[s,'second']].filter(e=>e[0])
  return r.map(([k,v])=>`${k} ${v}${k===1?'':'s'}`).join(', ') || '0'
}
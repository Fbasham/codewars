function parseData(s) {
  const f=s=>{
    let [k,v] = s.trim().split(': ')
    return [k,+v.replace(/\D/g,'')]
  }
  s = dataFile.replace(/##################################\n/g,'')
  let a = s.split('\n')
  let r = []; for (let i=0;i<a.length-1;i+=4) r.push(a.slice(i,i+4))
  let d = {
    'Ammonia':{max:0,countries:[]},
    'Nitrogen Oxide':{max:0,countries:[]},
    'Carbon Monoxide':{max:0,countries:[]}
  }
  for (let [loc,...data] of r){
    data.forEach(e=>{
    let [k,v] = f(e)
    if (v>d[k].max) d[k]={max:v,countries:[loc.slice(-3)]}
    else if (v===d[k].max) d[k].countries.push(loc.slice(-3))
    })
  }
  return Object.entries(d).map(([chemical,obj])=>{
    return `${chemical} levels in ${obj.countries.join(', ')} are too high.`
  }).join(' ')
}
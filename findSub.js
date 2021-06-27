function findSub(s,a,b,c){
  const f=s=>/[\,\.\[\]\(\)\{\}]/.test(s)?'\\'+s:s
  let r = s.match(new RegExp(`${f(a)}[^${f(a)}${f(b)}]+${f(b)}`,'g')) || []
  r = r.map(e=>[e,e.replace(new RegExp(`[^${f(c)}]`,'g'),'').length]).filter(e=>e[1])
  let m = Math.max(...r.map(e=>e[1]))
  return (r.find(e=>e[1]===m)||[''])[0]
}
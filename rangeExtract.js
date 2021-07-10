function solution(a){
  let r = [], t = []
  for (let e of a){
    if (!t.length) t.push(e)
    else if (e-t[t.length-1]===1) t.push(e)
    else {r.push(...(t.length<3 ? t : [`${t[0]}-${t[t.length-1]}`]));t=[e]}
  }
  return [...r,...(t.length<3 ? t : [`${t[0]}-${t[t.length-1]}`])].join(',')
}
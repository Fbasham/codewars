function orderWeight(s){
  const f=s=>[...s].reduce((a,c)=>a+ +c,0)
  return s.split(' ').sort((a,b)=>f(a)-f(b) || a.localeCompare(b)).join(' ')
}
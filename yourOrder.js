function order(s){
  const f=s=>s.replace(/\D/g,'')
  return s.split(' ').sort((a,b)=>f(a)-f(b)).join(' ')
}
function videoPart(a,b){
  const gcd=(a,b)=>b?gcd(b,a%b):a
  const f=s=>s.split(':').reverse().reduce((a,c,i)=>a+c*60**i,0)
  const g = gcd(f(a),f(b))
  return [f(a)/g,f(b)/g]
}
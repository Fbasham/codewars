function pf(n){
  let r = [], i = 2
  while (i*i<=n){
    while (n%i===0){
      r.push(i)
      n /= i
    }
    i++
  }
  if (n>1) r.push(n)
  return r
}

function isSmithNumber(n){
  const f=a=>a.reduce((a,c)=>a+ +c,0)
  if (pf(n).length<2) return false
  return f([...n+'']) === f([...pf(n).join('')])
}
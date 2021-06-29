function pf(n){
  let s = new Set(), i = 2
  while (i*i<=n){
    while (n%i===0){
      s.add(i)
      n /= i
    }
    i++
  }
  if (n>1) s.add(n)
  return [...s].sort((a,b)=>b-a)
}

function greatestCommonPrimeDivisor(a,b){
  let i = pf(a), j = pf(b)
  for (let e of i){
    if (j.includes (e)) return e
  }
  return -1
}

console.log(greatestCommonPrimeDivisor(100,140))
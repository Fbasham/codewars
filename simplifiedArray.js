function isPrime(n){
    if (n===2) return true
    if (n<2 || n%2===0) return false
    for (let i=3;i<n**.5+1;i+=2) if (n%i===0) return false
    return true
  }
  
  function simplifiedArray(a){
    let r = [...a], p = []
    while (r.length !== p.length){
      p = r, r = r.reduce((a,c,i)=>(i===0 ? a=[c] : isPrime(r[i-1])!==isPrime(c) ? a.push(c) : a[a.length-1]+=c,a),[])
    }
    return r
  }

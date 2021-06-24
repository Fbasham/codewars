let a = Array.from({length:10000},(e,i)=>i).filter(e=>isPrime(e) && [...e+''].every(e=>isPrime(+e)))

function isPrime(n){
  for (let i=3;i<n**.5+1;i+=2) if (n%i===0) return false
  return n===2 ? true : n<2 ||n%2===0 ? false : true
}

function primiestNumber(n){
  return n<=0 ? -1 : a[n-1] || -1
}
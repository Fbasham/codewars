function isPrime(n){
  if (n===2) return true
  if (n<2 || n%2===0) return false
  for (let i=3;i<n**.5+1;i+=2) if (n%i===0) return false
  return true
}

function twinPrime(n) {
  let primes = [...Array(Math.max(0,n+2)).keys()].filter(isPrime)
  let c = 0
  for (let i=0;i<primes.length;i++){
    if (primes[i+1]-primes[i]===2) c++
  }
  return c
}
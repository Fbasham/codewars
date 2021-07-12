function isPrime(n){
  if (n===2) return true
  if (n<2 || n%2===0) return false
  for (let i=3;i<n**.5+1;i+=2) if (n%i===0) return false
  return true
}

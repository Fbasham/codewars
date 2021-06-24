function isPrime(n){
  if (n<2 || n%2===0) return n===2
  for (let i=3;i<n**.5+1;i+=2) if (n%i===0) return false
  return true
}

function findOutPrime(n){
  let s = n+'', r = null
  for (let i=0;i<s.length;i++){
    for (let j=i+1;j<s.length+1;j++){
      let x = s.slice(i,j)
      if (isPrime(+x) && x>r) r=+x
    }
  }
  return r
}

console.log(findOutPrime(13579))
console.log(findOutPrime(10))

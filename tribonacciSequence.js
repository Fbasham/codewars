function tribonacci(a,n){
  return a.length<n ? tribonacci([...a,a.slice(-3).reduce((a,c)=>a+c,0)],n) : a.slice(0,n)
}
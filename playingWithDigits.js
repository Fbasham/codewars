function digPow(n,p){
  let r = [...n+''].reduce((a,c,i)=>a+c**(p+i),0)
  return r%n===0 ? r/n : -1
}
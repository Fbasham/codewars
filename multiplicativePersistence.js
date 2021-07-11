function persistence(n,c=0){
  return n<10 ? c : persistence([...n+''].reduce((a,c)=>a*c,1),c+1)
}
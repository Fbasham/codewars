function smaller(a){
  return a.map((e,i)=>a.slice(i).reduce((x,c)=>x+Number(c<e),0))
}
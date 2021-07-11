function uniqueInOrder(a){
  return [...a].reduce((a,c)=>(a[a.length-1]!==c?[...a,c]:a),[])
}
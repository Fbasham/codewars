function hoopGame(n,a){
  return a.map((e,i)=>{
    if (((i+1)%3===0 || (i+1)%7===0) && e!==0) return i%n+1
    else if ((i+1)%3 && (i+1)%7 && e!==i+1) return i%n+1
    return -1
  }).filter(e=>e!==-1)
}
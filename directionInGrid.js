function directionInGrid(n,m){
  let d='RDLU',i=0
  while (n>1 && m>0){
    m--; i++; 
    if (!m) break
    n--; i++;
  }
  return d[i%4]
}
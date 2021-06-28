function roomNumber(f,r){
  let rf=1,ff=1
  while (rf<=f){
    while (ff<rf || /4|13|18/.test(ff)) ff++
    rf++
    if (rf>f) break
    ff++
  }
  let rr=1,fr=1,x=[]
  while (rr<=r+1){
    while (fr<rr || /4|13/.test(fr)) fr++
    x.push([ff,fr])
    rr++
    fr++
  }
  return x.map(([i,j])=>`${i}${('000'+j).slice(-(fr>100?3:2))}`).slice(0,r)
}
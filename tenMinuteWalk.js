function isValidWalk(a){
  let d = {n:[-1,0],s:[1,0],e:[0,1],w:[0,-1]}
  let x=a.reduce((a,c)=>[a[0]+d[c][0],a[1]+d[c][1]],[0,0])
  return a.length===10 && x[0]===0 & x[1]===0
}
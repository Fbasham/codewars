function findOutlier(a){
  return Object.entries(a.reduce((a,c)=>({...a,[c%2]:a[c%2]&&a[c%2].concat(c)||[c]}),{})).filter(([k,v])=>v.length===1)[0][1][0]
}
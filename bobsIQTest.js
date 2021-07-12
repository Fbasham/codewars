function iqTest(s){
  return Object.values(s.split(' ').reduce((a,c,i)=>({...a,[c%2]:(a[c%2]?[...a[c%2],i]:[i])}),{})).find(e=>e.length===1)[0]+1
}
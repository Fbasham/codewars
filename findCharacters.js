function findCharacters(s){
  let A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let a = [...s.split('\n').join('')].sort().join('').match(/(.)\1*/g)
  let m = Math.min(...a.map(e=>e.length)) 
  return a.filter(e=>e.length===m).map(e=>e[0]).sort((a,b)=>A.indexOf(a)-A.indexOf(b)).join('')
}

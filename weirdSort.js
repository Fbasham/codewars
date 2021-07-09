function sort(s){
  let a = [...s.replace(/[^a-z]/gi,'')].sort((a,b)=>a.localeCompare(b)).join('').replace(/(.)\1*/gi,e=>[...e].sort().join(''))
  let b = [...s.replace(/\D/g,'')].sort()
  let c = [...s.replace(/[a-z0-9\s\n]/gi,'')].sort()
  return [...a,...b,...c].join('')
}
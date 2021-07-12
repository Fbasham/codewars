function isPangram(s){
  return [...new Set(s.toLowerCase().replace(/[^a-z]/g,''))].sort().join`` === 'abcdefghijklmnopqrstuvwxyz'
}
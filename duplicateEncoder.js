function duplicateEncode(s){
  return s.replace(/./g,e=>[...s].filter(x=>e.toLowerCase()===x.toLowerCase()).length>1?')':'(')
}
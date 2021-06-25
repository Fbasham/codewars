function firstNonRepeatingLetter(s) {
  return [...s].find(e=>[...s.toLowerCase()].filter(x=>x===e.toLowerCase()).length===1) || ''
}
function oragoo(s){
  if ([...s].every(e=>/[^aieouy]/i.test(e))) return s
  if (/^y/i.test(s)) return s.replace(/[aeiou]/i,e=>'orag'+e)
  if (/^[^aeiouy]/.test(s)) return s.replace(/[aeiouy]/i,e=>'orag'+e)
  return 'orag'+s
}
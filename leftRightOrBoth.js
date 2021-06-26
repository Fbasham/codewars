function leftRightOrBoth(s){
  if (!s.trim()) return ''
  const LEFT = '!@#$%12345qwertasdfgzxcvb'
  const RIGHT = '^&*()67890yuiophjkl;\'nm,./<>?:"'
  s = s.replace(/\s/g,'').toLowerCase()
  if ([...s].every(e=>LEFT.includes(e))) return 'Left'
  if ([...s].every(e=>RIGHT.includes(e))) return 'Right'
  return 'Both'
}
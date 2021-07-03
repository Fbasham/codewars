function portion(a,i,n){
  let x = [...a], rev = i<0
  if (i<0){x.reverse(),i *= -1}
  let r = x.slice(i,i+n)
  return i+n>x.length ? -1 : rev ? r.reverse() : r
}
function halfIt(n){
  if (typeof n!=='number' || !Number.isInteger(n)) return 0
  const isNeg = n<0
  let a = Math.abs(n).toString(2).match(/(.)\1*/g).map(e=>e.slice(0,Math.round(e.length/2)))
  return (isNeg ? -1 : 1)*parseInt(a.join(''),2)
}
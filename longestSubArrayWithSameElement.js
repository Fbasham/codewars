function findSubArrayWithSameElement(a,k){
  let s = a.join('')
  let m = Math.max(...(s.match(new RegExp(`${k}+`,'g')) || ['']))
  let i = s.lastIndexOf(m)
  return [i,i+(m+'').length-1]
}
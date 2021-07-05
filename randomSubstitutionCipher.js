function randomSub(){
  let ABC = 'abcdefghijklmnopqrstuvwxyz'
  let a = [...ABC], d = {}
  for (let e of ABC) d[e] = a.splice(~~(Math.random()*a.length),1)[0]
  return d
}
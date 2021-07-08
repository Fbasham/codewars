function alg196(n){
  let s = new Set()
  do {
    s.add(n)
    n += +[...n+''].reverse().join('')
    if (s.has(n)) return -1
  } 
  while (n != +[...n+''].reverse().join(''))
  return n
}

console.log(alg196(196))
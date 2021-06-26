function kaprekar(n){
  for (let i=1;i<8;i++){
    n = +[...('0000'+n).slice(-4)].sort((a,b)=>b-a).join('') - [...('0000'+n).slice(-4)].sort((a,b)=>a-b).join('')
    if (n===6174) return i
  }
  return -1
}
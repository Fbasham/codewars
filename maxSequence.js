const maxSequence = function(a){
  let r = 0
  for (let i=0;i<a.length;i++){
    for (let j=i;j<=a.length;j++){
      r = Math.max(r,a.slice(i,j).reduce((a,c)=>a+c,0))
    }
  }
  return r
}

console.log(maxSequence([ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ]))
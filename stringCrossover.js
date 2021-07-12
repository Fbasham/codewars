function stringsCrossover(a,s){
  let c = 0, d = []
  for (let i=0;i<a.length;i++){
    for (let j=0;j<a.length;j++){
      if (i!==j){
        let k = [i,j].sort().join(' ')
        if (!d.includes(k) && [...s].every((e,x)=>e===a[i][x] || e===a[j][x])){
          d.push(k)
          c++
        }
      }
    }
  }
  return c
}
function funnelOut(a){
  let r = ''
  while (a.some(e=>/\w/.test(e.join('')))){
    r += a[a.length-1][0]
    a[a.length-1][0] = ' '
    for (let i=a.length-1;i>0;i--){
      for (let j=0;j<a[i-1].length;j++){
        if (a[i][j]===' '){
          let m = [a[i-1][j],a[i-1][j],a[i-1][j+1]].filter(e=>e!==' ').sort()[0]
          a[i][j] = m
          a[i-1][a[i-1].indexOf(m)] = ' '
        }
      }
    }
  }
  return r
}


console.log(funnelOut(
 [
   ["d","a","c"],
     ["b","e"],
       ["f"]
   ]
))

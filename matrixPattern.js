function makeMatrix(m,n){
  let [a,b,c,d,e] = m+''
  let r = []
  for (let i=0;i<n/2;i++){
    let s = []
    for (let j=0;j<n;j++){
      if (j===i || j===n-i-1) s.push(a)
      else if (j>i && j<n-i-1) s.push(b)
      else if (j<i) s.push(d)
      else if (j>i) s.push(e)
    }
    r.push(s.join(' '))
  }
  for (let i=~~(n/2)-1;i>=0;i--){
    let s = []
    for (let j=0;j<n;j++){
      if (j===i || j===n-i-1) s.push(a)
      else if (j>i && j<n-i-1) s.push(c)
      else if (j<i) s.push(d)
      else if (j>i) s.push(e)
    }
    r.push(s.join(' '))
  }
  return r.join('\n')
}
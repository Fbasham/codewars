function scramble(a,b){
  let c = a.split('').reduce((a,c)=>(a[c] ? a[c]++ : a[c]=1, a),{})
  return b.split('').every(k=>--c[k]>=0)
}
  
function cipher26(s){
  let A = 'abcdefghijklmnopqrstuvwxyz'
  let r = s[0], p = A.indexOf(s[0])
  for (let i=1;i<s.length;i++){
    for (let j=0;j<26;j++){
      if ((p+j)%26===A.indexOf(s[i])){
        r += A[j]
        p += j
      }
    }
  }
  return r
}
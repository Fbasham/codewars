function decode(s,n){
  if (!Number.isInteger(n) || n<0 || n>35) return null
  if (!s) return ''
  const A='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let r = []
  for (let x of s.replace(/^\.+|\.+$/g,'').replace(/\.+/g,'.').split(' ')){
    let t = ''
    for (let e of x.split('.')){
      if (!e) {t+=e; continue}
      if (!/^[1-6][1-6]$/.test(e)) return null
      t += A[((+e[0]-1)*6+ +e[1]-n-1+36)%36]
    }
    r.push(t)
  }
  return r.join(' ')
}
const A = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function toLocString(n){
    const neg = n<0
    n = Math.abs(n)
    let r = ''
    for (let i=51;i>=0;i--){
      if (2**i<=n){
        n -= 2**i
        r = A[i] + r
      }
    }
    return (neg?'-':'')+r
}

function toInt(s){
    s = s.replace(/[\t\v\r\n\s]/g,'')
    const neg = s.startsWith('-')
    return (neg?-1:1)*[...s.replace('-','')].reduce((a,c)=>a+(2**(A.indexOf(c))),0)
}
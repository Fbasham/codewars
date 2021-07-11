function rotPred(a){
  let i = a.indexOf('S')
  let [x,y] = [a.slice(0,i),a.slice(i+1,)]
  if (x.length !== y.length) return 'Not a Valid Entry'
  const f=(a,x)=>a.reduce((a,c,i)=>a+c*(i+1)*x,0)
  let m = f(x.reverse(),-1) + f(y,1)
  return !m ? 'steady' : m>0 ? 'clockwise' : 'anti clockwise'
}
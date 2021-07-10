function countPerms(a){
  const f=n=>n<2?1:n*f(n-1)
  let x = a.reduce((a,c)=>[...a,...c],[])
  let d = x.reduce((a,c)=>({...a,[c]:a[c]+1||1}),{})
  return f(x.length)/Object.values(d).filter(e=>e>1).reduce((a,c)=>a*f(c),1)
}

let a = [[1,1,1], [2,2,3], [3,3,3]]
console.log(countPerms(a))
function whacAMole(a){
  let c = 0
  while(a.some(e=>e.some(x=>x>0))){
    let t=[];[...a].map((e,i)=>e.map((x,j)=>[x,i,j])).forEach(e=>t.push(...e))
    t = t.filter(e=>e[0]).sort((a,b)=>a[0]-b[0])
    t.forEach(([_,i,j],x)=>x<2 ? (c++,a[i][j]=0) : a[i][j]=Math.max(0,a[i][j]-1))
  }
  return c
}


let a = [
    [1,1,2,2],
    [3,3,4,4],
    [4,8,8,8]
]

console.log(whacAMole(a))
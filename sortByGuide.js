function sortByGuide(a,g){
  let x = a.map((e,i)=>[e,g[i]]).filter((e,i)=>g[i]!==-1 ? [e,i] : null).sort((a,b)=>b[1]-a[1])
  return a.map((e,i)=>g[i]===-1 ? e : x.pop()[0])
}

console.log(sortByGuide([56, 78, 3, 45, 4, 66, 2, 2, 4],[3, 1, -1, -1, 2, -1, 4, -1, 5]))
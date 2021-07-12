function solution(s){
  let r = []
  for (let i=0;i<s.length;i+=2){
    r.push((s.slice(i,i+2)+'_').slice(0,2))
  }
  return r
}
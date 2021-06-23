// function snail(a){
//   let r = []
//   while (a.length>1){
//     r.push(...a.shift())
//     a = a[0].map((e,i)=>a.map(x=>x[i])).reverse()
//   }
//   return r
// }

const snail=(a,r=[])=>a.length<1 ? r : snail(a[0].map((e,i)=>a.map(x=>x[i]).slice(1)).reverse(),[...r,...a[0]]) 

let a = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
console.log(snail(a))
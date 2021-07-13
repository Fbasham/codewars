function sortArray(a){
  let odd = a.filter(e=>e%2).sort((a,b)=>b-a)
  return a.map(e=>e%2 ? odd.pop() : e)
}
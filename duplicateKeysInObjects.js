function duplicated(arr,keys){
  let t = arr.filter(e=>keys.every(k=>k in e))
  return arr.filter(e=>t.filter(x=>keys.every(k=>x[k]===e[k])).length>1)
}
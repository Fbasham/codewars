function wordGenerator(ss,s=ss.toLowerCase()){
  let x = [...s].map((e,i)=>/[aeiou]/.test(e) ? i : -1).filter(x=>x>-1)
  let r = [s]
  for (let i of x){
    let a = []
    for (let e of r){
      for (let v of 'aeiou'){
        let t = [...e]
        t[i] = v
        a.push(t.join(''))
      } 
    }
    r.push(...a)
  }
  return [...new Set(r)].sort()
}

console.log(wordGenerator('Pszczyna'))
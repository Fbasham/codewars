const NAMES = [
  "dog","cat","bat","cock","cow","pig","fox",
  "ant","bird","lion","wolf","deer","bear","frog",
  "hen","mole","duck","goat"
]

function sc(s){
  let q = [[s,0]], m = 0
  while (q.length){
    let [x,c] = q.shift()
    for (let n of NAMES){
      let d = [...n].reduce((a,c)=>({...a,[c]:a[c]+1||1}),{})
      if (Object.keys(d).every(k=>[...x].filter(e=>e===k).length >= d[k])){
        let t = [...x].join('');
        [...n].forEach(e=>t=t.replace(e,''))
        q.push([t,c+1])
        if (c+1>m) m = c+1
      }
    }
  }
  return m
}

console.log(sc("cockdogwdufrbir"))
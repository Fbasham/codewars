function rgb(r,g,b){
    const f=s=>('0'+(Math.min(255,Math.max(0,s)).toString(16))).slice(-2).toUpperCase()
    return `${f(r)}${f(g)}${f(b)}`
  }
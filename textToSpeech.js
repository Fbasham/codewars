const bot = {
  message: function(s){
    if (/Add|Subtract/.test(s)){
      let a = s.match(/\d+/g)
      return /Add/.test(s) ? +a[0]+ +a[1] : +a[1]- +a[0]
    }
    let t = +s.match(/\d+/)[0] + +s.match(/:\d+/)[0].slice(1)/60 + (/pm/.test(s) ? 12 : 0)
    return t>=6 && t<=18 ? 'sunny' : 'raining'
  }
}
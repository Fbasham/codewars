function rot13(s){
    return s.replace(/[a-z]/gi,e=>{
      const isUpper = /[A-Z]/.test(e)
      let n = (e.charCodeAt() - (isUpper ? 65 : 97) + 13) % 26 + (isUpper ? 65 : 97)
      return String.fromCharCode(n)
    })
  }
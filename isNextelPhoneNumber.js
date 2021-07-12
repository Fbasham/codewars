function isValidNextelPhoneNumber(s){
  let x = s.replace(/\D/g,'')
  return x.length===9 && s.replace(/[^*]/g,'').length===2
}
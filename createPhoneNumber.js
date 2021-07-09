function createPhoneNumber(a){
  return `(${a.slice(0,3).join``}) ${a.slice(3,6).join``}-${a.slice(6).join``}`
}
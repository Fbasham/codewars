function alphanumeric(s){
  return s.length!==0 && [...s].every(e=>/[a-z0-9]/i.test(e))
}
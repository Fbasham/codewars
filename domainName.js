function domainName(s){
  s = s.replace(/(https?:\/\/)?(www\.)?/,'')
  return s.slice(0,s.indexOf('.'))
}
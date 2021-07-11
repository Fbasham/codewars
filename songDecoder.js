function songDecoder(s){
  return s.replace(/WUB/g,' ').replace(/\s\s+/g,' ').trim()
}
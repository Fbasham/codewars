function generateHashtag(s){
    let r = '#'+s.replace(/\s\s+/g,' ').split(' ').map(e=>(e[0]||'').toUpperCase()+e.slice(1)).join('')
    return r==='#' || r.length>140 ? false : r
  }
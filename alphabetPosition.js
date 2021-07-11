function alphabetPosition(s){
  return [...s.toLowerCase()].filter(e=>/[a-z]/i.test(e)).map(e=> e.charCodeAt()-96).join(' ')
}
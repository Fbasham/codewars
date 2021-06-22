function testit(a,b){
  if (a===4 && b===1) return `Happy April Fools' Day!`
  return (365 + (new Date(2021,3,1) - new Date(2021,a-1,b)) / 86400000) % 365
}
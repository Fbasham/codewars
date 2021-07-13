function findMissingLetter(a){
  let A = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let [i,j] = [A.indexOf(a[0]),A.indexOf(a[a.length-1])]
  return [...A.slice(i,j+1)].find(e=>!a.includes(e))
}
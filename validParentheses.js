function validParentheses(s){
  let c = 0
  for (let e of s){
    if (e==='(') c++
    if (e===')') c--
    if (c<0) return false
  }
  return !c
}
function isBalanced(s){
  let d = {'(':')','[':']','{':'}'}, q = [], c = 0, x = 0
  for (let e of s){
    if ('([{'.includes(e)) q.push(e)
    if (')]}'.includes(e)){
    let t = q.pop()
    if (d[t]===e) c++
    else {x += (t ? 2 : 1) + q.length; q = []}
    }
  }
  return [!x && !q.length,c,x+q.length]
}
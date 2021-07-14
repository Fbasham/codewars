function dragRace(d,a,b){
  const f=o=>Math.min(o.topSpeed,(2*o.acceleration*d)**.5)
  const g=(v,o)=>(t=v/o.acceleration,o.reactionTime+t+(d-t*v/2)/v)
  let [x,y] = [g(f(a),a),g(f(b),b)]
  return x===y ? "It's a draw" : `${x<y ? 'Anna' : 'Bob'} is the winner`
}
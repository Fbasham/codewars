function emergencyStop(d,o){
  let r = d - (o.speed**2/2/o.deceleration) - o.reactionTime*o.speed
  let s = (o.speed**2 - (2*o.deceleration*(d-o.reactionTime*o.speed)))**.5
  return r>=10 ? 'What was all the fuzz about?' : r>0 ? 'Phew, that was close...' 
    : s<10 ? 'The deer jumps away in the nick of time!' : 'An accident was unavoidable...'
}
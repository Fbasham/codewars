function penaltyShots(s,x){
  let [a,b] = [Math.min(...x),Math.max(...x)], d = 5-s
  if (a===b) return d<=0 ? 2 : d+1
  return a===0 && b===3 ? 0 : b-a>=2 && d<=3 ? d-1 : b+d>a+d ? Math.max(1,d) : a+d===b+d ? d+1 : 0
}
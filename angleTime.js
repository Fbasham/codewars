function getAngle(t){
  let [h,m] = t.split(':').map(e=>+e)
  if (!/^\d?\d:\d\d$/.test(t) || h>24 || m>59) return 'Invalid input'
  let d = Math.abs(30*h+m/2-m*6)%360
  return Math.min(360-d,d)
}
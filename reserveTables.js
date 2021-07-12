function reserve(bookings){
  const D = {2:4,3:2,4:2,6:1,8:1}, A = 'zero one two three four five six seven eight'.split(' ')
  let good = [], bad = []
  bookings.forEach((n,i)=>{
    if (D[n]) {good.push(`table for ${A[n]}`); D[n]--}
    else if (D[n+1]) {good.push(`table for ${A[n+1]}`); D[n+1]--}
    else bad.push(i)
  })
  return [good,bad.length ? `Bookings at the following indexes were not accepted: ${bad.join(', ')}` : '']
}
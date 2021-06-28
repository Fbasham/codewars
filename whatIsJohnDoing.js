function whatIsJohnDoing(s,e){
  let d = (new Date(e)-new Date(s))/86400000 % 16
  return 'Fishing,Fishing,Fishing,Airing net,Airing net,Fishing,Fishing,Fishing,Airing net,Airing net,Fishing,Fishing,Fishing,Selling fish,Airing net,Airing net'.split(',')[d]
}
  
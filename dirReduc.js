function dirReduc(a){
    let i=0
    while (i<a.length-1){
      let [x,y] = [a[i],a[i+1]]
      if (x=='NORTH'&&y=='SOUTH'||x=='SOUTH'&&y=='NORTH'||x=='WEST'&&y=='EAST'||x=='EAST'&&y=='WEST'){
        a.splice(i,2)
        i=-1
      }
      i++
    }
    return a
  }
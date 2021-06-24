function shapeTimesObjectIntoIterableArray(obj){
    let r = []
    for (let k in obj){
      let a = obj[k]
      if (a.length){
        let i = r.findIndex(e=>e.open===a[0].open && e.close===a[0].close)
        if (i !== -1) r[i].days.push(k)
        else r.push({open:a[0].open,close:a[0].close,days:[k]})
      }
    }
    return r
  }
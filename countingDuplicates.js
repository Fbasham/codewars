const duplicateCount=s=>([...s.toLowerCase()].sort().join('').match(/(.)\1*/g)||[]).reduce((a,c)=>a+(c.length>1?1:0),0)
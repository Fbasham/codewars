const pTable = { 
  '100m': { A: 25.4347, B: 18, C: 1.81 },
  'Long jump': { A: 0.14354, B: 220, C: 1.4 },
  'Shot put': { A: 51.39, B: 1.5, C: 1.05 },
  'High jump': { A: 0.8465, B: 75, C: 1.42 },
  '400m': { A: 1.53775, B: 82, C: 1.81 },
  '110m hurdles': { A: 5.74352, B: 28.5, C: 1.92 },
  'Discus throw': { A: 12.91, B: 4, C: 1.1 },
  'Pole vault': { A: 0.2797, B: 100, C: 1.35 },
  'Javelin throw': { A: 10.14, B: 7, C: 1.08 },
  '1500m': { A: 0.03768, B: 480, C: 1.85 } 
}

function decathlon(obj){
  const track=(k,v)=>!v ? 0 : ~~(pTable[k].A*((pTable[k].B-v)**pTable[k].C))
  const field=(k,v)=>!v ? 0 : ~~(pTable[k].A*(v-pTable[k].B)**pTable[k].C)
  return Object.keys(obj).map(k=>{
    return [k,Object.keys(obj[k]).reduce((a,c)=>{
      return a + (/\d/.test(c) ? track(c,obj[k][c]) : field(c,obj[k][c]))
    },0)]
  }).sort((a,b)=>b[1]-a[1])[0][0]
}


let athletes = {
  "Usain": {"100m": 9.58, "Long jump": 550, "Shot put": 12, "High jump": 220, "400m": 45, "110m hurdles": 29, "Discus throw": 60, "Pole vault": 450, "Javelin throw": 55, "1500m": 250 },
  "Justin": {"100m": null, "Long jump": 400, "Shot put": 15, "High jump": 156, "400m": 50, "110m hurdles": 19, "Discus throw": 25, "Pole vault": 400, "Javelin throw": 70, "1500m": 290 },
  "Christian": {"100m": 9.4, "Long jump": 450, "Shot put": 19, "High jump": 190, "400m": 55, "110m hurdles": 16.5, "Discus throw": 40, "Pole vault": 420, "Javelin throw": 65, "1500m": 280 }
}
console.log(decathlon(athletes))
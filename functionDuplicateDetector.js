const dupeDetect=a=>Object.values(a.reduce((a,c,i)=>(r=Array.from({length:256},(_,i)=>c(i)).join(''),a[r]=a[r]?[...a[r],i]:[i],a),{})).filter(e=>e.length>1)


const functionList = [
    x => x * 2,
    x => x ** 2,
    x => x + 20,
    x => x / 1000,
    x => x * x,
    x => Math.pow(x,2),
    x => x % 2
];

dupeDetect(functionList); // [[1, 4, 5]]
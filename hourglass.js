function draw(n){
  let a = [`${'■'.repeat(n)}`,`■${'∷'.repeat(n-2)}■`,`■${'∷'.repeat(n-2)}■`]
  let x = n-4
  for (var i=1;i<~~(n/2);i++){
    a.push(`${'　'.repeat(i)}■${'∷'.repeat(x)}■${'　'.repeat(i)}`)
    x-=2
  }
  a.push(`${'　'.repeat(i)}■${'　'.repeat(i)}`)
  return [...a,...a.slice(0,-1).reverse()].join('\n')
}
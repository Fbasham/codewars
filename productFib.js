function* fib(){
  let [a,b] = [0,1]
  yield 0
  while (true){
    [a,b] = [b,a+b]
    yield a
  }
}

function productFib(n){
  let f=fib(), a=[]
  while ((x=f.next().value) < n) a.push(x)
  for (let i=0;i<a.length;i++){
    if (a[i]*a[i+1]===n) return [a[i],a[i+1],true]
    if (a[i]*a[i+1]>n) return [a[i],a[i+1],false]
  }
}

console.log(productFib(800))

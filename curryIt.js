function CurryIt(fn){
    let ctx = null, a = []
    return function f(...e){
      if (this !== (function(){return this}).call(null)) ctx = this
      if (!e.length){let r = fn.apply(ctx,a); a = []; return r}
      a.push(...e)
      return f
    }
  }


let curryReduce = CurryIt(Array.prototype.reduce)
let exampleArray = [2,3,4]
curryReduce.call(exampleArray, function(a,b){
  return a + b;
});
curryReduce(8)
console.log(curryReduce())
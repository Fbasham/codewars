Array.prototype.qshuffle = function(){
  for (let i=0;i<this.length;i++){
    let x = this.splice(~~(Math.random()*this.length),1)
    this.splice(~~(Math.random()*this.length),0,...x)
  }
  return this
}
  
Array.prototype.qbsort = function() {
  this.qshuffle()
  if (this.slice(0,-1).every((e,i)=>e<=this[i+1])) return this
  QSC.destroyUniverse()
}
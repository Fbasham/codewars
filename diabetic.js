class Cup{
    constructor(){
      this.w = 0
      this.s = 0
      this.sweet = '0%'
    }
    update(){
      this.sweet = `${Math.min(100,Math.round(100*(this.s/(this.w || 1))))}%`
    }
    addWater(ml){
      this.w += ml
      this.update()
    }
    addSugar(g){
      this.s += g
      this.update()
    }
    drink(ml){
      this.s -= Math.round(this.s*ml/this.w)
      this.w -= ml
      if (!this.w) this.update()
    }
  }
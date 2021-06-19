function pigIt(s){
    return s.replace(/\w+/g,e=>e.slice(1)+e[0]+'ay')
  }
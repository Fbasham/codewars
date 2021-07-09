function find(object,path){
  for (let k of path.split('.')){
    try {object = object[k]}
    catch(e) {return}
  }
  return typeof object === 'function' ? undefined : object
}
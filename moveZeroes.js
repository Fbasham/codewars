const moveZeros = function (a) {
  let x = a.filter(e=>e!==0)
  let y = a.filter(e=>e===0)
  return [...x,...y]
}
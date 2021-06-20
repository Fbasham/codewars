const Node = function(value,edges){  
    nodes[value] = {
      value: value,
      edges: edges
    }
    return nodes[value]
  }
  
  let nodes = {}
  
  const getRoute = function(a,b){
    let q = [a], v = []
    while (q.length){
      let n = q.shift()
      if (n.value === b.value) return true
      if (v.indexOf(n) !== -1) continue
      v.push(n)
      for (let e of (n.edges || [])) q.push(e)
    }
    return false
  }
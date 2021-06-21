function zero(f=null) {return f ? f(0) : 0}
function one(f=null) {return f ? f(1) : 1}
function two(f=null) {return f ? f(2) : 2}
function three(f=null) {return f ? f(3) : 3}
function four(f=null) {return f ? f(4) : 4}
function five(f=null) {return f ? f(5) : 5}
function six(f=null) {return f ? f(6) : 6}
function seven(f=null) {return f ? f(7) : 7}
function eight(f=null) {return f ? f(8) : 8}
function nine(f=null) {return f ? f(9) : 9}

function plus(v) {return x=>x+v}
function minus(v) {return x=>x-v}
function times(v) {return x=>x*v}
function dividedBy(v) {return x=>~~(x/v)}
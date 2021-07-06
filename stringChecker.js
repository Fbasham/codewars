const stringChecker=(s,w)=>!w ? true : s.includes(w[0]) ? stringChecker(s.replace(w[0],''),w.slice(1)) : false


console.log(stringChecker('hello','helz'))
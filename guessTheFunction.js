const MD5 = require("crypto-js/md5")

function F(s){
  if ([...s].map(e=>e.charCodeAt()).some(e=>e===10||e>200)) return ''
  return [...MD5(s).toString()].reverse().join('')
}
function roastLegacy(s){
  let complaints = ["slow!","expensive!","manual!","down!","hostage!","security!"]
  let c = (s.match(new RegExp(complaints.join('|'),'gi'))||[]).length
  let d = {'cobol':1000,'nonobject':500,'monolithic':500,'fax':100,'modem':100,'thickclient':50,'tape':50,'floppy':50,'oldschoolit':50}
  let x = (s.match(new RegExp(Object.keys(d).join('|'),'gi'))||[]).reduce((a,c)=>a+d[c.toLowerCase()],0)
  if (!x && !c) return 'These guys are already DevOps and in the Cloud and the business is happy!'
  return `Burn baby burn disco inferno ${x} points earned in this roasting and ${c} complaints resolved!`
}
import re

def quadratic_builder(s):
    v = re.search('[a-z]',s).group()
    s = re.sub('-?\d*[a-z]',lambda x: '1' if len(x.group())==1 else '-1' if x.group()[:-1]=='-' else x.group()[:-1],s)
    r = list(map(int,re.findall('[+-]?\d+',s)))
    a,b,c = r[0]*r[2], r[0]*r[3] + r[1]*r[2], r[1]*r[3]
    f = lambda x: '' if not x else '-' if x==-1 else '+' if x==1 else '+'+str(x)
    return re.sub('^\+','',f"{f(a)}{v}^2{f(b)}{'' if not b else v}{f(c)}".replace('+-','-'))


print(quadratic_builder("(g-2)(-33g-66)"))
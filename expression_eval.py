import re

def f(s):
    d = 'zero one two three four five six seven eight nine'.split()
    if '=' in s: s = s[:s.find('=')]
    s = re.sub('[a-z]+',lambda x: str(d.index(x.group())),s).replace(' ','')
    s = re.sub('\d[!?]+',lambda x: str(int(x.group()[0])+sum(-1 if i=='?' else 1 for i in x.group()[1:])),s)
    return eval(s)

def solved_array(a):
    return [f(i) for i in a]
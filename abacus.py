def create_abacus(n):
    c = []
    for i in range(8,-1,-1):
        x,n = divmod(n,10**i)
        c.append(x)
    r = [''.join('*' if not j and c[i]<5 or j and c[i]>=5 else ' ' for i in range(9)) for j in range(2)]
    r += ['---------']
    c = [i%5 for i in c]
    r += [''.join(' ' if not c[i]-j else '*' for i in range(9)) for j in range(5)]
    return '\n'.join(r)

def read_abacus(s):
    a = [''.join(i)[1:] for i in zip(*s.splitlines())][::-1]
    return sum((5*10**i if x[0]=='*' else 0) + x[2:x.rfind(' ')].count('*')*10**i for i,x in enumerate(a))


print(read_abacus(create_abacus(1703)))
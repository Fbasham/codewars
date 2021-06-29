def pf(n):
    d,i = {},2
    while i*i<=n:
        while not n%i:
            if i in d: d[i] += 1
            else: d[i] = 1
            n //= i
        i += 1
    if n>1: d[n]=1
    return d.items()

def chain_arith_deriv(n,k):
    if len(pf(n))==1: return f'{n} is a prime number'
    r = [n]
    for _ in range(k-1):
        d = pf(n)
        s = 0
        for i in range(len(d)):
            t = 1
            for j,(k,v) in enumerate(d):
                t *= v*k**(v-1) if i==j else k**v
            s += t
        n = s
        r.append(n or 1)
    return r

print(chain_arith_deriv(231525,5))
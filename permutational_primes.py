from itertools import *

def is_prime(n):
    if n==2: return True
    if n<2 or not n%2: return False
    for i in range(3,int(n**.5)+1,2):
        if not n%i: return False
    return True

def permutational_primes(n,k):
    d = {}
    for i in range(n):
        for p in combinations(str(i),r=len(str(i))):
            x = int(''.join(p))
            if x<n:
                if is_prime(x) and p[0]!='0':
                    d.setdefault(''.join(sorted(p)),set()).add(x)
    r = [min(v) for v in d.values() if len(v)==k+1]
    return [len(r),min(r,default=0),max(r,default=0)]
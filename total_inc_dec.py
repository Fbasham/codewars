from math import factorial as f
C=lambda x,y:f(x)//(f(y)*f(x-y))

def total_inc_dec(n):
    return 10**n - sum(9*10**(i-1)-(i+18)*C(i+8,8)//9+10 for i in range(1,n+1))
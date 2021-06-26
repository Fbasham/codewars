from math import ceil

def cipher_text(s):
    s = ''.join(i for i in s if i.isalpha()).lower()
    n = ceil(len(s)**.5) or 1
    a = [s[i:i+n] for i in range(0,len(s),n)]
    return ' '.join(''.join(v[i] if i<len(v) else ' ' for v in a) for i in range(len(a[0])))
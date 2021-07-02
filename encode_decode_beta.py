import string

def encode(a,b,c):
    d = 0
    r = []
    for e in a:
        d = (string.ascii_letters.index(e)+b+c)%(b*c)+d 
        r.append(d)
    return r

def decode(a,b,c):
    a = [0]+a
    r = ''
    for i,j in zip(a,a[1:]):
        for x,e in enumerate(string.ascii_letters):
            if j == (x+b+c)%(b*c)+i:
                r += e
    return r

print(encode('abc',10,10))
print(decode([20, 41, 63], 10, 10))
from math import *

def area(a):
    (x1,y1),(x2,y2),(x3,y3) = a
    a = hypot(x1-x2,y1-y2)
    b = hypot(x1-x3,y1-y3)
    c = hypot(x2-x3,y2-y3)
    p = (a+b+c)/2
    return sqrt(p*(p-a)*(p-b)*(p-c))

def get_triangles(a,s):
    return [i for i,v in enumerate(a) if area(v)<=s]
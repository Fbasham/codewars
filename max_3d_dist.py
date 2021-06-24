def calc_distance(a):
    return sum(max(abs(x-y) for x,y in zip(i,j))*5 for i,j in zip(a,a[1:]))
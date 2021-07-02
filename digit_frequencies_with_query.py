def frequencyDigitsInQueries(a,q):
    return [sum(s.count(str(k)) for s in a[i:j+1]) for i,j,k in q]
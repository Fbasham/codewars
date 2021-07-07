def strings_in_max_depth(s):
    r,q,c,m = [],[],0,0
    for i,v in enumerate(s):
        if v=='(': 
            q.append(i)
            c+=1
        if v==')':
            if c>=m:
                m = c
                r.append((c,s[q.pop()+1:i]))
            c-=1
    return [j for i,j in r if i==m]
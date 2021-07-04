import time

def timer(limit):
    def decorator(fn):
        def wrapper(*args,**kwargs):
            t = time.time()            
            r = fn(*args,**kwargs)
            t = time.time()-t
            return t<limit
        return wrapper
    return decorator
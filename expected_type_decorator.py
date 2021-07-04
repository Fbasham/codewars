class UnexpectedTypeException(Exception):
    pass

def expected_type(types):
    def decorator(fn):
        def wrapper(arg):
            if not any(isinstance(fn(arg),t) for t in types): raise UnexpectedTypeException
            return fn(arg)
        return wrapper
    return decorator
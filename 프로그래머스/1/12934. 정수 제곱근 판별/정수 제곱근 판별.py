def solution(n):
    n = n**(1/2)
    
    if n == int(n):
        return (n+1)**2
    else:
        return -1
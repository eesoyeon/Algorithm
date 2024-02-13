def solution(n, m):
    a = [i for i in range(1, n+1) if n%i==0]
    b = [i for i in range(1, m+1) if m%i==0]
    
    common_values = [i for i in a if i in b]
    
    if len(common_values) == 1:
        gcd = 1
        lcm = n*m
    else:
        gcd = max(common_values)
        lcm = n*m//gcd
    
    return gcd, lcm
def solution(n):
    ternary = []
    a = 0
    b = 1
    answer = 0
    
    while n>0:
        a = n%3
        n //= 3
        ternary.append(a)
        
    for i in range(len(ternary)-1, -1, -1):
        answer += ternary[i]*b
        b *= 3
    
    return answer
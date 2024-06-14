def solution(n):
    answer = 0
    
    a = bin(n)[2:].count('1')
    
    for i in range(n+1, 1000000):
        if bin(i)[2:].count('1') == a:
                answer = i
                break
    
    
    return answer
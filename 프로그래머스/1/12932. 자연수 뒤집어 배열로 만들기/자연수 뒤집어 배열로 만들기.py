def solution(n):
    answer = []
    
    reversed_n = str(n)[::-1]
    
    for i in range(len(reversed_n)):
        answer.append(int(reversed_n[i]))
    
    return answer
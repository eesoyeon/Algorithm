def solution(n):
    answer = []
    
    n = str(n)[::-1]
    answer += n
    
    answer = list(map(int, answer))
    return answer
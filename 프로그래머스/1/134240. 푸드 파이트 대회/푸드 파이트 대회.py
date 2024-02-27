def solution(food):
    answer = ''
    
    for idx, num in enumerate(food):
        num //= 2
        answer += str(idx)*num
        
    
    return answer+'0'+answer[::-1]
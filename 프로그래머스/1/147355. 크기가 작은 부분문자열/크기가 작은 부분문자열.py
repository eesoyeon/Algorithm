def solution(t, p):
    cnt = 0
    
    #p의 길이로 부분문자열
    for i in range(len(t)-len(p)+1):
        substring = t[i:i+len(p)]
        if substring <= p:
            cnt += 1
    
    return cnt
def solution(t, p):
    li = []
    cnt = 0
    
    #p의 길이로 부분문자열
    for i in range(len(t)-len(p)+1):
        li.append(t[i:i+len(p)])
        if int(li[i])<=int(p):
            cnt += 1
    
    return cnt
def solution(n):
    answer = n-1
    
    for i in range(2, n+1):
        # cnt = n-1
        for j in range(2, int(i**(1/2))+1):
            if i%j==0:
                answer -= 1
                break
        # if cnt == 1:
        #      answer += 1
    
    return answer
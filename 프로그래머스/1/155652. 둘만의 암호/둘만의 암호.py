def solution(s, skip, index):
    answer = ''
    alpha = sorted(set("abcdefghijklmnopqrstuvwxyz") - set(skip))
    print(alpha)
    
    num = len(alpha)
    
    for char in s:
        answer += alpha[(alpha.index(char) + index)%num]
            
    return answer
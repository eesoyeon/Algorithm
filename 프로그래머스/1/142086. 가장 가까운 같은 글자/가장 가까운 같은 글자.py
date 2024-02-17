def solution(s):
    answer = []
    index = {}
    
    for i, char in enumerate(s):
        if char in index:
            answer.append(i-index[char])
        else:
            answer.append(-1)
        
        index[char] = i
    
    return answer
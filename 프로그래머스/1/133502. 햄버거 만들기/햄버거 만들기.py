def solution(ingredient):
    answer = 0
    cur_stack = []
    
    for i in ingredient:
        cur_stack.append(i)
        
        if cur_stack[-4:] == [1, 2, 3, 1]:
            del cur_stack[-4:]
            answer += 1
    
    
    return answer
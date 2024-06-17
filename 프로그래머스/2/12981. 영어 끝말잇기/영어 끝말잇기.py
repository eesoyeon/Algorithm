def solution(n, words):
    stack_li = [words[0]]
    
    for i in range(1, len(words)):        
        if (words[i] in stack_li) or (words[i-1][-1] != words[i][0]):
            num = (i % n) + 1
            order = (i // n) + 1
            
            return [num, order]

        
        stack_li.append(words[i])
    
    
    return [0, 0]
def solution(answers):
    answer = []
    
    #5, 8, 10
    a1 = [1, 2, 3, 4, 5] 
    a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    c1 = c2 = c3 = 0
    a = 0
    
    for i in answers:
        if i==a1[a%5]: c1 += 1
        if i==a2[a%8]: c2 += 1
        if i==a3[a%10]: c3 += 1
        a += 1
            
    answer.append(c1)
    answer.append(c2)
    answer.append(c3)
    
    f = list(filter(lambda x: answer[x] == max(answer), range(len(answer))))
    
    return [x+1 for x in f]
def solution(cards1, cards2, goal):
    answer = []
    l1 = len(cards1)
    l2 = len(cards2)
        
    i=j=0
    for word in goal:
        if i<l1 and word==cards1[i]:
            answer.append(cards1[i])
            i += 1
            print('i=', i) 
        if j<l2 and word==cards2[j]:
            answer.append(cards2[j])
            j += 1
            print('j=', j)
    
    print(answer)
    
    return "Yes" if answer==goal else "No"
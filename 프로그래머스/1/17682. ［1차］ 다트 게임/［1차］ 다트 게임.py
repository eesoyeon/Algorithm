def solution(dartResult):
    score = []
    bonus = {'S':1, 'D':2, 'T':3}
    start_idx = 0
    
    #스타상*, 아차상#
    for i in range(len(dartResult)):
        d = dartResult[i]
        # print(d)
        if d in bonus.keys():
            score.append(int(dartResult[start_idx:i])**bonus[d])

        elif d=='*':
            score[-2:] = [2*x for x in score[-2:]]
            
        elif d=='#':
            score[-1:] = [-x for x in score[-1:]]
            
        if not d.isnumeric():
            start_idx = i + 1 
    
    return sum(score)
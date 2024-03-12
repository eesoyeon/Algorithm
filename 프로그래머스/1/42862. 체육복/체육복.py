def solution(n, lost, reserve):
    lost.sort()
    reserve.sort()
    lost_set = list(set(lost) - set(reserve))
    reserve_set = list(set(reserve) - set(lost))
    
    
    answer = n - len(lost_set)
    for l in lost_set:
        if l-1 in reserve_set:
            reserve_set.remove(l-1)
            answer += 1
        elif l+1 in reserve_set:
            reserve_set.remove(l+1)
            answer += 1
            
    return answer
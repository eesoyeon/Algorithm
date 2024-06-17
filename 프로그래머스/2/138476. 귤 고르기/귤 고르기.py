from collections import Counter

def solution(k, tangerine):
    answer = 0
    
    types_count = Counter(tangerine)
    
    # for t in set(tangerine):
    #     types_count[t] = tangerine.count(t)
     
    sorted_types_count = sorted(types_count.values(), reverse=True)
    
    cnt = 0
    for value in sorted_types_count:
        cnt += value
        answer += 1
        if cnt >= k:
            break

    return answer
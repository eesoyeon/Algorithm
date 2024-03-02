from itertools import combinations

def solution(nums):
    answer = 0

    li = [sum(i) for i in list(combinations(nums, 3))]
    
    for i in li:
        cnt = 0
        for j in range(1, int(i**(1/2))+1):
            if i%j==0:
                cnt += 1
        if cnt == 1:
            answer += 1
 
    return answer
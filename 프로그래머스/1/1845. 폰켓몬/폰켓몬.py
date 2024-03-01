from itertools import combinations

def solution(nums):
    answer = 0
    
    n = len(nums)//2
    set_nums = set(nums)
    
    if n <= len(set_nums):
        answer = n
    else:
        answer = len(set_nums)

    return answer
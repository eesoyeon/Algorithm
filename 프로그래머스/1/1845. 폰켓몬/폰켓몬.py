def solution(nums):
    answer = 0
    
    get = len(nums) / 2
    
    nums = set(nums)
    
    if len(nums) <= get:
        answer = len(nums)
    else:
        answer = get
    
    return answer
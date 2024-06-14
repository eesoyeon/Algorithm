def lcm(a, b):
    c, d = max(a, b), min(a, b)

    while d!=0:
        c, d = d, c%d
    gcd = c
    
    return (a*b // gcd)


def solution(arr):
    answer = 0
    
    if len(arr) == 1:
        return arr[0]
    elif len(arr) == 2:
        return lcm(arr[0], arr[1])
    
    answer = lcm(arr[0], arr[1])
    
    for i in range(2, len(arr)):
        answer = lcm(answer, arr[i])
    
    return answer
def lcm(a, b):
    c, d = max(a, b), min(a, b)

    while d!=0:
        c, d = d, c%d
    gcd = c
    
    return (a*b // gcd)


def solution(arr):
    answer = arr[0]
    
    for i in range(1, len(arr)):
        answer = lcm(answer, arr[i])
    
    return answer

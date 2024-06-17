def solution(n):
    answer = 0
    

    li = [0, 1, 1]

    for i in range(3, n+2):
        a = li[i-1] % 1234567 + li[i-2] % 1234567
        li.append(a%1234567)
    

    return li[-1]
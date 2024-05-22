def solution(arr, divisor):
    answer = []
    arr.sort()
    for a in arr:
        if a%divisor == 0:
            answer.append(a)
    
    if len(answer)==0:
        answer.append(-1)
    
    return answer
def solution(arr1, arr2):
    sum_val = 0
    answer = []
    for X, Y in zip(arr1, arr2):
        tmp = []
        for x, y in zip(X, Y):
            sum_val = x + y
            tmp.append(sum_val)
        answer.append(tmp)
    
    return answer
def solution(elements):
    answer = 0

    sums = []
    n = len(elements)
    elements += elements[:-1]
    
    for i in range(len(elements)):
        for j in range(i+1, i+n+1):
            sums.append(sum(elements[i:j]))
    
    answer = len(set(sums))

    return answer
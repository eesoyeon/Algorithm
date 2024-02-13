def solution(arr):
    answer = []
    for elem in arr:
        if answer[-1:] == [elem]:
            continue
        answer.append(elem)
    return answer
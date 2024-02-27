def solution(strings, n):
    answer = []
    # strings.sort()
    
    for string in strings:
        answer.append(string[n]+string)

    answer.sort()
    
    return [i[1:] for i in answer]
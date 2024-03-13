def solution(s):
    answer = []
    s = s.split(' ')

    for char in s:
        if char:
            answer.append(char[0].upper() + char[1:].lower())
        else:
            answer.append(char) 


    return ' '.join(answer)
def solution(X, Y):
    answer = ''
    x, y = {}, {}
    
    for i in X:
        if i in x:
            x[i] += 1
        else:
            x[i] = 1
    
    for j in Y:
        if j in y:
            y[j] += 1
        else:
            y[j] = 1

    for key in x:
        if key in y:
            # print(min(x.get(key), y.get(key)))
            answer += key*(min(x.get(key), y.get(key)))
    
    if answer == "":
        answer = "-1"
    elif set(answer) == {"0"}:
        answer = "0"
    else:
        answer = ''.join(sorted(answer, reverse=True))
    
    return answer
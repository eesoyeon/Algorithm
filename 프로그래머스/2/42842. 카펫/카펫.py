def solution(brown, yellow):
    answer = []
    a = brown + yellow
    for i in range(1, int(a**(1/2))+1):
        x, y = 0, 0
        if a%i==0:
            x = i
            y = a//i
            if (x-2)*(y-2) == yellow:
                answer.append(x)
                answer.append(y)
        
    return sorted(answer, reverse=True)
def solution(n, m, section):
    answer = 0
    paint = section[0]-1
    
    for v in section:
        if paint < v:
            paint = v+m-1
            print(paint)
            answer += 1
    
    
    return answer
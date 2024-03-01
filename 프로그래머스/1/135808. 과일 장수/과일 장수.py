def solution(k, m, score):
    #1~k점, m개의 사과, 최대 이익
    answer = 0
    
    #정렬 후 슬라이싱
    score.sort(reverse=True)
    for i in range(m-1, len(score), m):
        answer += score[i]*m
    
    return answer
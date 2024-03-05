def solution(N, stages):
    answer = []

    # 1~N+1
    user = len(stages)
    failure = 1
    yet, now = 0, 1
 
    # (2 개수)  / (2<stage) 수
    for i in range(1, N+1):
        for stage in (stages):
            if stage==i:
                yet += 1
            if stage>=i:
                now += 1
        try:
            failure = yet/(now-1)
            answer.append(failure)
        except ZeroDivisionError:
            answer.append(0)
        yet, now = 0, 1
    
    all = [(answer[i], i) for i in range(len(answer))]
    s = sorted(all, key=lambda x: x[0], reverse=True)
    
    
    return list(map(lambda x: x[1]+1, s))
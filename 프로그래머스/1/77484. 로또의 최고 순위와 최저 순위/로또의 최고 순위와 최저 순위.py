def solution(lottos, win_nums):
    answer = []
    ranking = [6, 5, 4, 3, 2, 1, 0]
    min_num, max_num = 0, 0
    
    for num in win_nums:
        if num in lottos:
            min_num += 1
            lottos.remove(num)
            
    max_num = min_num + lottos.count(0)

    for i, r in enumerate(ranking):
        if r==0:
            i=5
        if r==max_num:
            answer.append(i+1)
        if r==min_num:
            answer.append(i+1)
    
    return answer
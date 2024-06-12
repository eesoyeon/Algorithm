def solution(clothes):
    answer = 1
    
    dic = {}
    for cloth in clothes:
        category = cloth[1]
        if category in dic:
            dic[category] += 1
        else:
            dic[category] = 1

    for key in dic:
        answer *= (dic[key] + 1)
    
    answer -= 1
    
    return answer
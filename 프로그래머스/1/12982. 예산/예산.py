def solution(d, budget):
    answer = 0
    
    d.sort()
    price = 0
    

    for i in range(len(d)):
        price += d[i]
        if price>budget:
            break
        answer = i+1
    
    return answer
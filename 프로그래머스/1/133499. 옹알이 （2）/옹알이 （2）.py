def solution(babbling):
    answer = 0
    can = ["aya", "ye", "woo", "ma"]
    cant = ["ayaaya", "yeye", "woowoo", "mama"]

    for b in babbling:
        while b:
            if b[:2] in can and b[:4] not in cant:
                b = b[2:]
            elif b[:3] in can and b[:6] not in cant:
                b = b[3:]
            else:
                break
        print(b)
        if not b:
            answer += 1
        
            
    return answer
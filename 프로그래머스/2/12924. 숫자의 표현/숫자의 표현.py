def solution(n):
    answer = 0
    val = 0
    
    k = 1
    
    while True:
        if k == n+1:
            break
        for i in range(k, n+1):
            val += i
            if val == n:
                answer += 1
            elif val > n:
                val = 0
                break
        val = 0
        k += 1
            
    return answer
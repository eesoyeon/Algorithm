def is_prime(n):
    if n==1: return False

    for i in range(2, int(n**(1/2) + 1)):
        if n%i==0: return False
    
    return True
    
def solution(n, k):
    answer = 0
    
    li = []
    s = ""
    
    #n을 k진수의 문자열로 변환
    while n>0:
        s += str(n%k)
        n //= k               
                   
    s = s[::-1].split('0')
    
    for num in s:
        if num and is_prime(int(num)):
            answer += 1

    return answer
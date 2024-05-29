def solution(price, money, count):
    sum_val = 0
    for i in range(1, count+1):
        sum_val += i
    
    p = price*sum_val
    if p > money:
        return (p - money)
    else:
        return 0
    

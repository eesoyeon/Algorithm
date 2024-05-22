def solution(x):
    sum_val = 0
    a = x
    while a > 0:
        sum_val += a%10
        a //= 10
        
    if x % sum_val == 0:
        return True
    else:
        return False

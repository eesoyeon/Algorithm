def solution(price, money, count):
    lst = [price*i for i in range(1, count+1)]
    
    answer = sum(lst) - money
    
    if answer > 0:
        return answer
    else:
        return 0
    

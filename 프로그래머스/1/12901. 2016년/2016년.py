def solution(a, b):
    days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    d = 0
    cnt = 0
    x = 0
    
    for i in range(1, a):
        if i<=7 and i%2 !=0:
            d = 31
        elif i==2:
            d = 29
        elif i>7 and i%2==0:
            d = 31
        else:
            d = 30
        cnt += d
    cnt += b
    
    x = cnt % 7
    
    return days[x-1]
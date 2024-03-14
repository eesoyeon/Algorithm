def solution(s):
    answer = []
    cnt = 0
    zero = 0
    
    while s!="1":
        cnt += 1
        zero += s.count("0")
        s = bin(s.count("1"))[2:]
    
    
    return [cnt, zero]
def solution(n, arr1, arr2):
    answer = []
    
    map1 = []
    map2 = []
    
    for a in arr1:
        tmp = ''
        while a:
            remainder = str(a%2)
            a //= 2
            tmp += remainder
        if len(tmp)<n:
            tmp += '0'*(n-len(tmp))
        map1.append(tmp[::-1])
    
    for b in arr2:
        tmp = ''
        while b:
            remainder = str(b%2)
            b //= 2
            tmp += remainder
        if len(tmp)<n:
            tmp += '0'*(n-len(tmp))
        map2.append(tmp[::-1])

        
    for i in range(n):
        a, b = map1[i], map2[i]
        decode = ''
        for j in range(n):
            bit = (int(a[j]) | int(b[j]))
            if bit==1:
                decode += '#'
            else:
                decode += ' '
        answer.append(decode)
        
    return answer
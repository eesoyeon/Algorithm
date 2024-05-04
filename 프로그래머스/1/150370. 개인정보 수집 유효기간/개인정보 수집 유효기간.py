def solution(today, terms, privacies):
    answer = []
    valid = []
    dic = {}
    
    today = today.replace('.', '')
    
    for t in terms:
        x = t[0]
        y = int(t[2:])
        dic[x] = y
    
    for p in privacies:
        p_li = p[:10].split('.')
        y, m, d = int(p_li[0]), int(p_li[1]), int(p_li[2])
        m += dic[p[-1]]
        
        if d==1:
            d = 28
            m -= 1
        else:
            d -= 1
        if m>12:
            y += (m//12)
            if m%12 == 0:
                y -= 1
                m = 12
            else:
                m %= 12
           
        
        if len(str(m)) == 1:
            m = '0' + str(m)
        if len(str(d)) == 1:
            d = '0' + str(d)
        
        valid.append(str(y)+str(m)+str(d))
     
    for i, v in enumerate(valid):
        if today > v:
            answer.append(i+1)
        
    print(today, valid)
    
    return answer
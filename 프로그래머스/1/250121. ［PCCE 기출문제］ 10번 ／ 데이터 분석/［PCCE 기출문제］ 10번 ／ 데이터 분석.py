def solution(data, ext, val_ext, sort_by):
    answer = [[]]
    cond = ["code", "date", "maximum", "remain"]
    # ext < val_ext, sort_by 오름차순
    
    e = cond.index(ext)
    s = cond.index(sort_by)
    
    for d in data:
        if d[e] < val_ext:
            answer.append(d)
    answer = list(filter(None, answer))
    
    return sorted(answer, key = lambda x:x[s])
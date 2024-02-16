def solution(sizes):
    for lst in sizes:
        lst.sort()
        
    max_w = max(x[0] for x in sizes)
    max_h = max(x[1] for x in sizes)
    
    return max_w*max_h
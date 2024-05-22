def solution(absolutes, signs):
    sum_val = 0
    for a, b in zip(absolutes, signs):
        if b==True:
            sum_val += a
        else:
            sum_val -= a
    return sum_val


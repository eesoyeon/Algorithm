def solution(x):
    li = list(map(int, str(x)))
    if x % sum(li) == 0:
        return True
    else:
        return False

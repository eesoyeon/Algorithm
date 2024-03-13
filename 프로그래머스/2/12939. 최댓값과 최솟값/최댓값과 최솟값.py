def solution(s):
    answer = ''
    li = [int(x) for x in s.split(' ')]

    return str(min(li)) + " " + str(max(li))
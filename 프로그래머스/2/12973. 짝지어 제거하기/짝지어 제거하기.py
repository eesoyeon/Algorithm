def solution(s):
    stack = []
    
    for i in s:
        if stack and stack[-1] == i:
            stack.pop()
            continue
        stack.append(i)
    # print(not stack)
    return int(not stack)
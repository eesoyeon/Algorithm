def solution(s):
    stack = []
    
    for x in s:
        if x == "(":
            stack.append(x)
        else:
            if stack==[]:
                return False
            else:
                stack.pop()

    return stack==[]
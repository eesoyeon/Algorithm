n, m = map(int, input().split())

state = list(map(int, input().split()))

# 1은 켜짐, 0은 꺼짐
for _ in range(m):
    a, b, c = map(int, input().split())
    if a == 1:
        state[b-1] = c
    elif a == 2:
        for i in range(b-1, c):
            if state[i] == 0:
                state[i] = 1
            else:
                state[i] = 0
    elif a == 3:
        state[b-1:c] = [0]*(c-b+1)
    else:
        state[b-1:c] = [1]*(c-b+1)


for s in state:
    print(s, end=" ")


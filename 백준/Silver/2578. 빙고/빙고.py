bingo = [list(map(int, input().split())) for _ in range(5)]
answer = []
for _ in range(5):
    answer += list(map(int, input().split()))

def check():
    cnt = 0

    #가로
    for x in bingo:
        if x.count(0) == 5:
            cnt += 1
    
    #세로
    for i in range(5):
        y = 0
        for j in range(5):
            if bingo[j][i] == 0:
                y += 1
        if y ==5:
            cnt += 1

    #대각선
    a = 0
    for i in range(5):
        if bingo[i][i] == 0:
            a += 1
    if a == 5:
        cnt += 1
    
    b = 0
    for i in range(5):
        if bingo[i][4-i] == 0:
            b += 1
    if b == 5:
        cnt += 1

    return cnt


cnt = 0
for i in range(25):
    for x in range(5):
        for y in range(5):
            if answer[i] == bingo[x][y]:
                bingo[x][y] = 0
                cnt += 1
    if cnt >= 12:
        result = check()
        if result >= 3:
            print(i+1)
            break
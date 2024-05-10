import sys

n, m = map(int, input().split())
chingho = [sys.stdin.readline().split() for _ in range(n)]
chingho.sort(key = lambda x: int(x[1]))

def binary_search(chingho, power):
    start, end = 0, n
    result = 0
    while start <= end:
        mid = (start+end)//2
        if int(chingho[mid][1]) >= power:
            result = mid
            end = mid - 1
        else:
            start = mid + 1
    return result

for i in range(m):
    power = int(sys.stdin.readline())
    print(chingho[binary_search(chingho, power)][0])
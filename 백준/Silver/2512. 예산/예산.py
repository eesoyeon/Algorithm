n = int(input())
li = list(map(int, input().split()))
total = int(input())

li.sort()
start, end = 0, max(li)
result = 0

while start <= end:
    mid = (start+end)//2
    sum_val = 0
    for l in li:
        if l > mid:
            sum_val += mid
        else:
            sum_val += l

    if sum_val <= total:
        result = mid
        start = mid + 1
    else:
        end = mid - 1

print(result)
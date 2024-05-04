def binary_search(data, target):
    start = 0
    end = len(data)-1

    while start <= end:
        mid = (start + end)//2
        if data[mid]==target:
            return 1
        elif data[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return 0
            


n = int(input())
l1 = list(map(int, input().split()))
l1.sort()
m = int(input())
l2 = list(map(int, input().split()))

for i in l2:
    print(binary_search(l1, i), end=" ")
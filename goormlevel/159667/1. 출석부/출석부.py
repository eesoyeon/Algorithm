n, k = map(int, input().split())
li = [list(input().split()) for _ in range(n)]

li.sort(key=lambda x: (x[0], x[1]))
	
print(' '.join(li[k-1]))

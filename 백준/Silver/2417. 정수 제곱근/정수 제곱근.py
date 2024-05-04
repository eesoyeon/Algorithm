n = int(input())

q = int(n**(1/2))

if q**2 >= n:
    print(q)
else:
    print(q+1)
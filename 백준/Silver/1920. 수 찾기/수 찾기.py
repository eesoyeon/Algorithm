n = int(input())
n_li = set(map(int, input().split()))

m = int(input())
m_li = list(map(int, input().split()))

for i in m_li:
    print(1) if i in n_li else print(0)


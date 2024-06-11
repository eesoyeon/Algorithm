import math
n, m = map(int, input().split())

salt = 7 * n / 100.0
total_water = n + m

salt_water = salt / total_water * 100

answer = math.floor(salt_water * 100) / 100

print("%.2f" %answer)





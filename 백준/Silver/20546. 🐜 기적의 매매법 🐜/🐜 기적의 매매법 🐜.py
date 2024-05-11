n = int(input())
stocks = list(map(int, input().split()))

jun = [n, 0]
sung = [n, 0]
jun_asset, sung_asset = 0, 0

# jun
for i in range(14):
    if stocks[i] <= jun[0]:
        jun[1] += (jun[0] // stocks[i])
        jun[0] = jun[0] % stocks[i]

# sung
sell, buy = 0, 0
for i in range(13):
    if stocks[i] > stocks[i+1]:
        buy += 1
        if buy == 3:
            buy -= 1
            sung[1] += (sung[0] // stocks[i+1])
            sung[0] = sung[0] % stocks[i+1]

    if stocks[i] < stocks[i+1]:
        sell += 1
        if sell == 3:
            sung[0] += sung[1] * stocks[i+3]
            sung[1] = 0
            break
# print(sung)

jun_asset = jun[0] + stocks[-1]*jun[1]
sung_asset = sung[0] + stocks[-1]*sung[1]


if jun_asset > sung_asset:
    print("BNP")
elif jun_asset < sung_asset:
    print("TIMING")
else:
    print("SAMESAME")

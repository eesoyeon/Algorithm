def solution(number, limit, power):
    answer = 0
    weapon = []
    # 약수 개수 > limit -> power
    for i in range(1, number+1):
        cnt = 0
        for j in range(1, int(i**(1/2))+1):
            if i%j==0:
                cnt += 1
                if j**2!=i:
                    cnt += 1
            if cnt>limit:
                cnt = power
                break
        weapon.append(cnt)

    return sum(weapon)
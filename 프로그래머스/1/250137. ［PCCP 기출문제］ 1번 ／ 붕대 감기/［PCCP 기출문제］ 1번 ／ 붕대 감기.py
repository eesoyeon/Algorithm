def solution(bandage, health, attacks):
    answer = health
    
    t, x, y = bandage[0], bandage[1], bandage[2]
    now_time = 0   
    continuous = 0
    attack_idx = 0
    
    while True:
        now_time += 1

        if answer <= 0:
            return -1
        
        if attack_idx == len(attacks):
            break
        
        if now_time == attacks[attack_idx][0]:
            answer -= attacks[attack_idx][1]
            attack_idx += 1
            continuous = 0
        else:
            answer = min(health, answer + x)
            continuous += 1
            
            if continuous==t:
                continuous = 0
                answer = min(health, answer + y)
                
    
    return answer
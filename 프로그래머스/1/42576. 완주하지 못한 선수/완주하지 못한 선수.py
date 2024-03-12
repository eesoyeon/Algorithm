def solution(participant, completion):
    answer = ''
    participant_count = {}
    
    for p in participant:
        if p in participant_count:
            participant_count[p] += 1
        else:
            participant_count[p] = 1
    
    for c in completion:
        participant_count[c] -= 1
    
    for p, count in participant_count.items():
        if count > 0:
            answer = p
            break
    
    return answer
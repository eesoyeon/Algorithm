def solution(numbers, hand):
    answer = ''
    
    key_pad = {
        1:(0,0), 2:(0,1), 3:(0,2),
        4:(1,0), 5:(1,1), 6:(1,2),
        7:(2,0), 8:(2,1), 9:(2,2),
        '*':(3,0), 0:(3,1), '#':(3,2),
    }
    
    left_pos = key_pad['*']
    right_pos = key_pad['#']
    
    for n in numbers:
        current_pos = key_pad[n]
        if n in [1, 4, 7]:
            left_pos = current_pos
            answer += 'L'
        elif n in [3, 6, 9]:
            right_pos = current_pos
            answer += 'R'
        elif n in [2, 5, 8, 0]:
            left_dist = abs(left_pos[0] - current_pos[0]) + abs(left_pos[1] - current_pos[1])
            right_dist = abs(right_pos[0] - current_pos[0]) + abs(right_pos[1] - current_pos[1])
            
            if left_dist < right_dist:
                left_pos = current_pos
                answer += 'L'
            elif left_dist > right_dist:
                right_pos = current_pos
                answer += 'R'
            else:
                if hand=='right':
                    right_pos = current_pos
                    answer += 'R'
                else:
                    left_pos = current_pos
                    answer += 'L'

    return answer
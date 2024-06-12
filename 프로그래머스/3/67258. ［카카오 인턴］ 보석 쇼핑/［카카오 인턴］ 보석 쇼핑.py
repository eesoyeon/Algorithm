def solution(gems):
    answer = [0, len(gems)-1]
    
    gem_types = len(set(gems))

    gem_count = {}
    left, right = 0, 0
    min_length = len(gems) + 1
    
    while right < len(gems):
        # 현재 보석 추가
        if gems[right] in gem_count:
            gem_count[gems[right]] += 1
        else:
            gem_count[gems[right]] = 1
        
        #모든 종류의 보석이 포함되었는지 확인
        while len(gem_count) == gem_types:
            if right - left < min_length:
                min_length = right - left
                answer = [left, right]
            
            gem_count[gems[left]] -= 1
            if gem_count[gems[left]] == 0:
                del gem_count[gems[left]]
                
            left += 1
            
        right += 1
    
    return [answer[0] + 1, answer[1] + 1]
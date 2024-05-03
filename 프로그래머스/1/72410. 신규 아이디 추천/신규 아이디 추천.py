def solution(new_id):
    answer = ''
    char_list = "abcdefghijklmnopqrstuvwxyz0123456789-_."
    
    #1단계
    new_id = new_id.lower()

    #2단계
    for char in new_id:
        if char in char_list:
            answer += char
    
    #3단계
    while '..' in answer:
        answer = answer.replace('..', '.')
    
    #4단계
    while answer.startswith('.') or answer.endswith('.'):
        if answer.startswith('.'):
            answer = answer[1:]
        else:
            answer = answer[:-1]
    
    #5단계
    if answer=="":
        answer += 'a'
        
    #6단계
    if len(answer)>15:
        answer = answer[:15]
        if answer[-1] == ".":
            answer = answer[:14]
        
    #7단계
    if len(answer) <= 2:
        while len(answer) < 3:
            answer += answer[-1]
        
    
    return answer
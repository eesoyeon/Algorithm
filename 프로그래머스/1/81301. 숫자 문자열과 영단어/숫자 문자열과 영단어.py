def solution(s):
    num_list = {
        'zero': "0", 
        'one' : "1", 
        'two' : "2", 
        'three' : "3", 
        'four' : "4", 
        'five' : "5", 
        'six' : "6", 
        'seven' : "7", 
        'eight' : "8", 
        'nine' : "9",
    }
    
    answer = ''
    
    word = '' #현재 읽고 있는 단어 저장 변수
    for char in s:
        if char.isalpha():
            word += char
            if word in num_list:
                answer += num_list[word]
                word = "" #초기화
        else:
            answer += char
    
    return int(answer)
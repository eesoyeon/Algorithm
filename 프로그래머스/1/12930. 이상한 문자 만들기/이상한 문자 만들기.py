def solution(s):
    answer = ''
    word = s.split(" ")
    string = ''
    
    for i in range(len(word)):
        string = word[i]
        for j in range(len(string)):
            if j%2==0:
                answer += string[j].upper()
            else:
                answer += string[j].lower()
        if i!=len(word)-1:
            answer += ' '
    
    return answer
def solution(survey, choices):
    answer = ''
    score = [3, 2, 1, 0, 1, 2, 3]
    dic = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0}
    
    for i in range(len(survey)):
        if choices[i] > 4:
            dic[survey[i][1]] += score[choices[i]-1]
        else:
            dic[survey[i][0]] += score[choices[i]-1]
        
    answer += 'R' if dic['R'] >= dic['T'] else 'T'
    answer += 'C' if dic['C'] >= dic['F'] else 'F'
    answer += 'J' if dic['J'] >= dic['M'] else 'M'
    answer += 'A' if dic['A'] >= dic['N'] else 'N'
    
    return answer
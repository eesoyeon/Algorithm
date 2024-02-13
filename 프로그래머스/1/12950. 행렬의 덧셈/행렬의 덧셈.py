def solution(arr1, arr2):
    answer = []
    a = len(arr1) 
    b = len(arr1[0]) 
    
    for i in range(a):
        tmp = []
        for j in range(b):
            tmp.append(arr1[i][j] + arr2[i][j])
    
        answer.append(tmp)
        
    return answer
    
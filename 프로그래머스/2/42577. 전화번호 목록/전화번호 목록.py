def solution(phone_book):
    dic = {}
    
    for number in phone_book:
        dic[number] = True
        
    for number in phone_book:
        prefix = ""
        for char in number:
            prefix += char
            if prefix in dic and prefix!=number:
                return False
    
    return True
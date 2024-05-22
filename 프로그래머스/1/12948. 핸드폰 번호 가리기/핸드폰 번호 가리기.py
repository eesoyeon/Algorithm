def solution(phone_number):
    hide = "*" * (len(phone_number) - 4)
    lastfour = phone_number[-4:]
    return hide + lastfour
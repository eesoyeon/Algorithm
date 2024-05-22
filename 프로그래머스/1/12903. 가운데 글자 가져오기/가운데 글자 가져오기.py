def solution(s):
    i = len(s) // 2
    return s[i] if len(s)%2!=0 else s[i-1:i+1]
  
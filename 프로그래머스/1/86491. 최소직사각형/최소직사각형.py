def solution(sizes):
    max_width = max(max(x) for x in sizes)  # 가로 길이의 최대값
    max_height = max(min(x) for x in sizes)  # 세로 길이의 최대값
    
    return max_width * max_height
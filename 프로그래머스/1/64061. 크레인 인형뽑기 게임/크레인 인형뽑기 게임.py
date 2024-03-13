def solution(board, moves):
    answer = 0
    basket = []
    
    for move in moves:
        move -= 1
        for i in range(len(board)):
            if board[i][move] != 0:
                basket.append(board[i][move])
                board[i][move] = 0
                
                if len(basket) > 1:
                    if basket[-1] == basket[-2]:
                        basket.pop(-1)
                        basket.pop(-1)
                        answer += 2

                break
            
    
    print(basket) 
    return answer
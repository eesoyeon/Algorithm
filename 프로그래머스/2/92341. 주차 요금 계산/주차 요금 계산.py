import math

def solution(fees, records):
    answer = []
    
    car_record = {}
    car_total_time = {}
    basic_time, basic_fee, unit_time, unit_fee = fees
    
    for record in records:
        time, number, info = record.split(" ")
        time = int(time[:2]) * 60 + int(time[3:])
        
        if info=='IN':
            car_record[number] = time
        elif info=='OUT':
            parking_time = time - car_record[number]
            
            if number in car_total_time:
                car_total_time[number] += parking_time
            else:
                car_total_time[number] = parking_time
                
            del car_record[number]

            
    for number, time in car_record.items():
        parking_time = 1439 - time
        if number in car_total_time:
            car_total_time[number] += parking_time
        else:
            car_total_time[number] = parking_time
    
    
    for number, total_time in car_total_time.items():
        if total_time <= basic_time:
            fee = basic_fee
        else:
            excess_time = total_time - basic_time
            fee = basic_fee + math.ceil(excess_time / unit_time) * unit_fee
        answer.append([number, fee])
    
    answer.sort()

    return [fee for number, fee in answer]
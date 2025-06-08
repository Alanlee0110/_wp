def summary(data):
    for student in data:
        total_score = sum(student['scores'])
        average_score = round(total_score / len(student['scores']), 1)
        print(f"{student['name']} 總分: {total_score}, 平均: {average_score}")

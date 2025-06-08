def most_common(nums):
    count_dict = {}
    for num in nums:
        count_dict[num] = count_dict.get(num, 0) + 1

    return max(count_dict, key=count_dict.get) if nums else None

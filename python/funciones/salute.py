def saluteHi(name, last_name):
    print(f"let's go {name} {last_name}")
    print("welcome")


saluteHi("george", "12")


def addition(*nums):
    result = 0
    for num in nums:
        result += num
    print(result)


addition(3, 3, 10)
addition(3, 3, 100)
addition(3, 3, 1000)

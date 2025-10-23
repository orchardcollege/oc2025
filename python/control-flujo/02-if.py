# if statements are from top down and evaluates the if first so
# be careful with the order
# the code stops at the first true it gets
age = 19
if age > 90:
    print("you may watch the movie for free")
elif age > 18:
    print("you may enter")
else:
    print("you may not enter")

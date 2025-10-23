print("welcome to our calcualtor")
print("type esc to exit")
print("oparators are: add, sub, mult & div")

result = ""
while True:
    if not result:
        result = input("enter number: ")
        if result.lower() == "esc":
            break
        result = int(result)
    op = input("enter operator: ")
    if op.lower() == "esc":
        break
    n2 = input("enter another number: ")
    if n2.lower() == "esc":
        break
    n2 = int(n2)

    if op.lower() == "add":
        result += n2
    elif op.lower == "sub":
        result -= n2
    elif op.lower == "mult":
        result *= n2
    elif op.lower == "div":
        result /= n2
    else:
        print("invalid operation")
        break
    print(f"the result is {result}")

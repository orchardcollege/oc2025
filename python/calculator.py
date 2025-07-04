n1 = int(input("enter number: "))
n2 = int(input("enter another number: "))

add = n1 + n2
sub = n1 - n2
multi = n1 * n2
div = n1 / n2

comment = input("what do you want?, select one: + - * / :")

if comment == "+":
    print(f"your result is {add}")
elif comment == "-":
    print(f"your result is {sub}")
elif comment == "*":
    print(f"your result is {multi}")
elif comment == "/":
    if n2 != 0:
        print(f"your result is {div}")
    else:
        print("No puedes dividir por 0")

else:
    print("Ingresa un operador válido")

message = f"""
the results for {n1} and {n2} are:
addition: {add}
substraction: {sub}
multiplication: {multi}
division: {div}
"""
print(message)

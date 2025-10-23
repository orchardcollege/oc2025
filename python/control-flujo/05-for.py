autos = ["Toyota", "Ford", "Lexus"]

""" for number in range(1):
    print(number) """

marca_preferida = "Toyota"
for auto in autos:
    if auto == marca_preferida:
        print(marca_preferida)
    elif auto != marca_preferida:
        print(auto)
    print(f"las marcas de autos son: {auto}")

for char in "ultimate python":
    print(char)

n_to_look = 10
for number in range(11):
    if number == n_to_look:
        print("found", n_to_look)
        break
    else:
        print("could not be found", n_to_look)

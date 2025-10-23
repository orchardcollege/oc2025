def product(**data):
    # def product(**data) defines a function called product that accepts any number of keyword arguments (like name="Shoe", cost=20).
    # **data collects those keyword arguments into a dictionary called data.
    print(data["name"], data["cost"])


product(id="id", name="iphone", cost="500.000")
product(id="id", name="iphoneX", cost="1.500.000")

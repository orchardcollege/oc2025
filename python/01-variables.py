"""This script prints a full name and demonstrates function usage."""


def print_name():
    """Prints the full name using name_concat variable."""
    name = "John"
    last_name = "The accoutant"
    name_concat = " " + name + " " + last_name
    print("printed by a function:" + name_concat)


print_name()

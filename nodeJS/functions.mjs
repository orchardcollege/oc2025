export function sayHello(name) {
    console.log("hello", name)
}

export const multi = (a, b) => {
    console.log(a * b)
}

let people = [
    {
        name: "Marta",
        age: 21,
        city: "Magallanes"
    },
    {
        name: "Alicia",
        age: 25,
        city: "Santiago"
    },
    {
        name: "Ana",
        age: 43,
        city: "Curicó"
    }

];


for (let key in people) {
    console.log(key + ": " + people[key]); // object object
}
for (let key in people) {
    console.log(`Person ${key}:`, people[key]);
}

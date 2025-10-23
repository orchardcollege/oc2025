

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5363636, 2331414]

let numsReduce = nums.reduce((a, b) => {
    return a + b;
}, 0)

console.log(numsReduce)




const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});

console.log(fruitCount);
// Output: { apple: 3, banana: 2, orange: 1 }

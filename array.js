var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Numbers slice :${number.slice(2, 6)}`);

console.log("Initial array values: " + number);

for (num of number) {
  console.log(`The value of array num of ${num}`);
}

console.log("After push operation");
for (num of number) {
  console.log(`The value of array num of ${num}`);
}

console.log("After pop operation");
number.pop();
for (num of number) {
  console.log(`The value of array num of ${num}`);
}

console.log("After unshift operation");
number.unshift(12);
for (num of number) {
  console.log(`The value of array num of ${num}`);
}

console.log(number.indexOf(5));
console.log(number.includes(15));

// Sum of array elements
let sum = 0;
for (num of number) {
  sum += num;
}
console.log(`The sum of array num is : ${sum}`);

// Sum of array elements using reduce
let total = number.reduce((num, currnum) => num + currnum, 0);
console.log(`The total sum of array num using reduce is : ${total}`);

// Filter even numbers from array
let evenNumbers = number.filter((num) => num % 2 === 0);
console.log(`The even numbers from array are : ${evenNumbers}`);

// Multiply each even number by 5
let newevenNumbers = evenNumbers.map((num) => num * 5);

console.log(`The even numbers after multiplying by 5 : ${newevenNumbers}`);

// Sort array of fruits
let fruits = ["banna", "orange", "grapes", "apple"];
fruits.sort();
console.log(`The sorted fruits are : ${fruits}`);

let scores = [12, 23, 004, 006, 17, 18];
scores.sort((a, b) => a - b);
console.log(`The sorted scores are : ${scores}`);

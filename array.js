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

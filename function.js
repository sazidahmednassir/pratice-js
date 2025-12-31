// Simple addition function
function  add(a, b) {
    return a + b;
}

let sum = add(2,3);
console.log(sum); 

//Anyonymous function for multiplication
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));


let divide = (a, b) => {
    return a / b;
};

console.log(divide(10, 2)); 

// Block scope example
var greeting= "Morning";
function greet() {
    var greeting = "Hello";
    console.log(greeting); 
}

console.log(greeting);
greet(); 
console.log(greeting);

// Another block scope example with let
let farewell = "Goodbye";
const farewellFunction = () => {
    let farewell = "See you later";
    console.log(farewell); 
}

console.log(farewell);
farewellFunction();
console.log(farewell);

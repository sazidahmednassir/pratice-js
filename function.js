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

greet(); 
function add(a, b){
    return a+b;
}

console.log(add(2, 3)); // Output: 5

// Anonymous function
let multiply = function(x, y){
    return x * y;
};

console.log(multiply(4, 5)); // Output: 20

//MORE WAY
let divide = (m, n) => {
    if(n === 0){
        return "Cannot divide by zero";
    }else if(m % n != 0){
        return "Result is not a whole number";
    }else {
        return m/n;
    }
}
console.log(divide(10, 2)); // Output: 5
let day='tuesday';

console.log(day.length); // Output: 7
console.log(day.slice(0, 4)); // Output: "tues"
console.log(day.toUpperCase()); // Output: "TUESDAY"
console.log(day.includes('day')); // Output: true);
console.log(day[2])

let splitDay = day.split('e');
console.log(splitDay[0]); // Output: "tu"
console.log(splitDay[1]); // Output: "sday"

let nassirName = " Nassir ";
console.log(nassirName.trim()); // Output: "Nassir"

let num1='10';
let num2='20';
let diff = parseInt(num1) + parseInt(num2);
console.log(diff);

let diffString = diff.toString();
console.log(typeof diffString); // Output: "string"

let funday = day+' is a fun day!';
console.log(funday); // Output: "tuesday is a fun day!"

let indexOfDay = funday.indexOf('day', 5);
console.log(indexOfDay); // Output: 4

let count=0;
while(indexOfDay !== -1){
    count++;
    indexOfDay = funday.indexOf('day', indexOfDay + 1);
}
console.log(count); // Output: 2

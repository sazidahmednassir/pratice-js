//example of string operations
let day="Friday ";
console.log(day.length); 

//substring in string
let subday=day.substring(0,4);
console.log(subday);

//split in string
let splitday=day.split("i");
console.log(splitday[1]);

//trim in string
console.log(splitday[1].trim().length)

//Convert string into number
let date="2024-06-15";
// Remove hyphens and convert to number
let dateinnum= parseInt(date.replace(/-/g, ""));
console.log(dateinnum); // Output: 20240615
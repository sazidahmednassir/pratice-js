//object is collection of properties

let person= {
    name: "Nassir",
    age: 30,
    city: "Dhaka",
    profession: "QA Engineer",
    designation: function(){
        console.log(`${this.name} is a ${this.profession}`);
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.profession);

console.log("Accessing object properties using bracket notation");
//accessing object properties using bracket notation

console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);
console.log(person["profession"]);
person.name = "Sazid Ahmed Nassir";
person.gender="Male"
console.log(person);

delete person.age;
console.log(person);

console.log("gender" in person);

for(let key in person){
    console.log(`Person's ${key} is ${person[key]}`);
}

person.designation();


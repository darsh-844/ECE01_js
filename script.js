console.log("Hello World");
const name = "Darsh";
console.log(name);
console.log("The length of the name is: " + name.length);
const age = 18;
console.log("The age is: " + age);
const isStudent = true;
console.log("Is the person a student? " + isStudent);
const hobbies = ["reading", "coding", "hiking"];
console.log("Hobbies: " + hobbies.join(", "));
console.log("The first hobby is: " + hobbies[0]);
console.log(x); // This will cause an error because x is not defined
var x = 10; // This will not cause an error because of hoisting
console.log(typeof(x)); // This will print "number"
console.log(typeof(name)); // This will print "string"
console.log(typeof(isStudent)); // This will print "boolean"  
let y ;
console.log(typeof(y));
let z = null;
console.log(typeof(z)); // This will print "object" because of a quirk in JavaScript
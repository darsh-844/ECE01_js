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
console.log(typeof(hobbies)); // This will print "object" because arrays are a type of object in JavaScript
console.log(x); // This will cause an error because x is not defined
var x = 10; // This will not cause an error because of hoisting
console.log(typeof(x)); // This will print "number"
console.log(typeof(name)); // This will print "string"
console.log(typeof(isStudent)); // This will print "boolean"  
let y=9;
y++;
console.log(y); // This will print 10
console.log(typeof(y));
let z = null;
console.log(z); // This will print null
console.log(typeof(z)); // This will print "object" because of a quirk in JavaScript
const sym1 = Symbol(4);
console.log(sym1); // This will print a unique symbol value
console.log(typeof(sym1)); // This will print "symbol"
const sym2 = Symbol(4);
console.log(sym2); // This will print a different unique symbol value
console.log(typeof(sym2)); // This will print "symbol"
console.log(sym1 === sym2); 

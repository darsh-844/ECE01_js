/*console.log("Hello World");
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

let count;
document.write(" Starting Loop " + "<br/>");
for (count = 0; count < 10; count++) {  
    document.write("Current count: " + count + "<br/>");
}
doucument.write(" Loop Ended ");

const person ={
    fname:"Manni",
    lname:"chauhan",
    age:"82",
}
for (let x in person){
    console.log( " Person details:" +x+":"+person[x])
}

let count = 0;
while(count < 10){
    document.write("Current count: " + count + "<br/>");
    count++;
}

document.write(" Loop Ended ");   */

// let age=20;
// if(age >= 18){
//     document.write("<b>You are a not minor.</b>");
// }
// else{
//     document.write("<b>You are a minor.</b>");
// }

// let grade='A';
// document.write("<b>Your grade is: " + grade + "</b><br/>");
// document.write("Entering swtich block <br/>");
// switch(grade){
//     case 'A':
//         document.write("<b>Excellent!</b>");    
//         break;
//     case 'B':
//         document.write("<b>Good job!</b>");
//         break;
//     case 'C':
//         document.write("<b>Well done!</b>");
//         break;
//     case 'D':
//         document.write("<b>You passed.</b>");
//         break;
//     case 'F':
//         document.write("<b>Better luck next time.</b>");
//         break;
//     default:
//         document.write("<b>Invalid grade.</b>");
// }

// for(let i=0; i<5; i++){
//     if(i === 2){
//         continue; // Skip the rest of the loop when i is 2
//     }   
//     document.write("Current value of i: " + i + "<br/>");
// }

// function myFunction(){
//     alert("My name is John!");
// }

// function sayHello(name,age){
//     document.write(name + " is " + age + " years old.<br/>");
// }
// let res=add(5,10);
// document.write("The result of addition is: " + res + "<br/>");
// function add(a,b){
//     return a + b;
// }

// let add2=(a,b)=>{
//     return a + b;
// }
// let res=add2(5,0);
// document.write("The result of addition is: " + res + "<br/>");

// let person = {
//     fname: "Manni",
//     lname: "Chauhan",
//     age: 82,
//     isMarried: true,
//     address: {
//         street: "123 Main St",
//         city: "Anytown",   }
// };
// document.write(person);

// var person = new Object();
// person.fname = "Manni";
// person.lname = "Chauhan";
// person.age = 82;    
// person.isMarried = true;
// person.address = {};
// person.address.street = "123 Main St";
// person.address.city = "Anytown";
// console.log(person);

//diff btw array and object
// array is an ordered collection of values, while an object is a collection of key-value pairs. 
// Arrays are typically used to store lists of items, while objects are used to represent more complex data structures with properties and methods. 

// function calRes(){
//     let n=parseFloat(document.getElementById("subjects").value);
//     let i;
//     let total=0;
//     for(i=0; i<n; i++){
//         let x=parseFloat(prompt("Enter marks for subject " + (i+1)));
//         total += x;
//     }
//     let average = (total / n) ;
//     let grade;
//     if(average >= 90){
//         grade = "A";
//     }   
//     else if(average >= 70){
//         grade = "B";
//     }
//     else if(average >= 50){
//         grade = "C";
//     }
//     else if(average >= 30){
//         grade = "D";
//     }
//     else{
//         grade = "F";
//     }

// switch(grade){
//     case average >= 90:
//         grade = "A";
//         break;  
//     case average >= 70:
//         grade = "B";
//         break;
//     case average >= 50:
//         grade = "C";
//         break;
//     case average >= 30:
//         grade = "D";
//         break;
//     default:
//         grade = "F";
//      }
//     let result;
//     if(grade === "A" || grade === "B" || grade === "C"){
//         result = "Pass";
//     }   
//     else{
//         result = "Fail";
//     }
//     let resDiv = document.getElementById("result");
//     resDiv.innerHTML = "<b>Total Marks: " + total + "</b><br/><b>Average Marks: " + average + "</b><br/><b>Grade: " + grade + "</b><br/><b>Result: " + result + "</b>";
// }
    
// var myInfo=new Array();
// var myInfo1=Array();
// console.log(myInfo,myInfo1)

// const result= document.getElementById("dj");
// result.innerHTML="<b> Hello World </b>";

// const result1=document.getElementsByClassName("p1");
// result1[1].innerHTML="<b> Darsh </b>";
// result1[0].innerHTML="<b> Hello World </b>";
// result1[2].innerHTML="<b> Welcome to JavaScript </b>";
// result1[0].style.color="red";
// result1[1].style.color="green";
// result1[2].style.color="blue";

// const result=document.getElementById("div").getAttribute("class");
// document.getElementById("p1").innerHTML=result ;

const heading = document.createElement("h1");
const bodytag= document.getElementsByTagName("body");
bodytag[0].before(heading);
heading.innerHTML="Hello World";
heading.style.color="red";
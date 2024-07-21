/*
Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
*/

let name = "Rahul";
let age = 21;
let address = "Nepal";
let eat = function (){
    console.log("eating food");
}

let person = {name,age,address,eat};
console.log(person);



/*
Task 9: Create an object with computed property names based on variables and log the object to the console.
*/
let propName1 = 'firstName';
let propName2 = 'lastName';

let person2 = {
    [propName1]:"Rahul",
    [propName2]:"Yadav",
    age:21
};

console.log(person2);
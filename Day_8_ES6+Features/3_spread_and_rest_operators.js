/*
Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional
elements, and log the new array to the console.
*/

let existingArray = [1, 2, 3];

let additionalElements = [4, 5, 6];

let newArray = [...existingArray, ...additionalElements];

console.log(newArray);





/*
Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
*/

function sum (...args){
    let total = 0;
    for(let arg of args){
        total+= arg;
    }
    return total;
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));
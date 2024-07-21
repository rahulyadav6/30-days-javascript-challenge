/*
Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default
value of 1 . Log the result of calling this function with and without the second parameter.
*/

function product (num1, num2=2){
    return num1 * num2;
}
console.log(product(2));
console.log(product(2,3));

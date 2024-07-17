// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function evenOddCheck(num){
    if(num%2==0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}
evenOddCheck(5);

/*
Task 2: Write a function to calculate the square of a number and return the result.
*/

function calcSquare(num){
    return num * num;
}
let result = calcSquare(5);
console.log(result);
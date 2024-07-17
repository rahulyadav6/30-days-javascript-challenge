// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function findMax(num1,num2){
    if(num1 > num2){
        console.log(`${num1} is greater than ${num2}`);
    }else if(num2 > num1){
        console.log(`${num2} is greater than ${num1}`);
    }else{
        console.log(`${num1} and ${num2} are same`);
    }
}

findMax(5,5)

/*
Task 4: Write a function expression to concatenate two strings and return the result.
*/

function concat(string1,string2){
    return(string1 + string2);
}

let result = concat("Rahul", "Yadav");
console.log(result);
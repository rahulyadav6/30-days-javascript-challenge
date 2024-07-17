// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sum = (num1,num2)=>{
    return num1+num2;
}
console.log(sum(4,5));

/*
Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
*/
let check = (str,char)=>{
    return str.includes(char)
}

let result = check("Rahul","L");
console.log(result);
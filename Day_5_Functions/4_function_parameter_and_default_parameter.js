/*
Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second
parameter.*/

let mul = (num1,num2=5)=>{
    return(num1 * num2);
}

let result = mul(5);
console.log(result);


/*
Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the
age.
*/

let greet = (name,age=21)=>{
    return (`Good mornig ${name}, You are ${age} years old`);
}
let res = greet("Rahul");
console.log(res);
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 5000;
let num2 = 50000;
let num3 = 500;

if(num1 > num2){
    if(num1 > num3){
        console.log(`${num1} is gretest of all three numbers`);
    }else{
        console.log(`${num3} is gretest of all three numbers`);
    }
}else{
    if(num2 > num3){
        console.log(`${num2} is greatest of all three numbers`);
    }else{
        console.log(`${num3} is gretes of all three numbers`);
    }
}
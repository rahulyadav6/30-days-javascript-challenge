let a = 5;
let b = 10;

//Task 11: Write a program that uses the operator to combine two conditions and log the result to the console.
if(a%5 == 0 && b%5 == 0){
    console.log(`a and b both are divisible by 5`);
}

// Task 12: Write a program that uses the II operator to combine two conditions and log the result to the console.
if(a%5 == 0 || b%5 == 0){
    console.log(`Eiher a or b or both a and b are divisible by 5`);
}


// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
if(!a){
    console.log(`a is zero`);
}else{
    console.log(`a is not zero`);
}
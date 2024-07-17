/*
Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
*/
function square(num){
    return num * num;
}
let cube = (fn,num)=>{
    let res = fn(num) * num;
    return res;
}

let result = cube(square,3);
console.log(result);

/*
Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then
applies the second function to the result.
*/
function double(num1){
    return num1 *2;
}
function triple(num1){
    return (double(num1) * num1);
}

let myFun = (fn1,fn2,value)=>{
    let resfn1 = fn1(value);
    let resfn2 = fn2(resfn1);
    return resfn2;
}

let myFunResult = myFun(double,triple,2)
console.log(myFunResult);

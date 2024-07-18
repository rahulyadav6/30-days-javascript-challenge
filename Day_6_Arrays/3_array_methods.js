
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const arr = [1,2,3,4,5,6];
const doubleArr = arr.map((val)=>{
    return val * 2;
})
console.log(doubleArr);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenArray = arr.filter((val)=>{
    return val % 2 == 0;
})
console.log(evenArray);



/*
Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
*/
const sumOfArray = arr.reduce((sum,currVal)=>{
    return sum+=currVal;
})
console.log(sumOfArray);
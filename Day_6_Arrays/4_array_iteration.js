// Task 10: Use a for loop to iterate over the array and log each element to the console.

const arr = [1,2,3,4,5,6];
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}




/*
Task 11: Use the foreach method to iterate over the array and log each element to the console.
*/
arr.forEach((currentValue,index,arr)=>{
    console.log(`value at index ${index} is ${currentValue} and the given array is ${arr}`);
})
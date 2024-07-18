// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let arr = [];
let row = 3;
let cols = 4;
h=0;
for(let i=0; i<row; i++){
    arr[i] = [];
    for(let j=0; j<cols; j++){
        arr[i][j] = h++;
    }
}
console.log(arr);


/*
Task 13: Access and log a specific element from the two-dimensional array.
*/
let specificElement = 6;
for(let i=0; i<row; i++){
    for(let j=0; j<cols; j++){
        if(arr[i][j] === specificElement){
            console.log(`${arr[i][j]} is peresent at index (${i},${j})`);
            break;
        }
    }
}
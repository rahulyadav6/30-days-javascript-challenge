// Task 7: Write a program to print a pattern using nested for loops:

let n = 5;
for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}
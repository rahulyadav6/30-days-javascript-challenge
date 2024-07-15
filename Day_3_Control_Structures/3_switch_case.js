
/* 
Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day
name to the console.
*/
let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(`Today is ${day}`);







/*
Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to
the console.
*/

let grade;
let percentage = 90;
switch(true){
    case(percentage > 90):
        grade = 'A';
        break;
    case(percentage > 80):
        grade = 'B';
        break;
    case(percentage > 70):
        grade = 'C';
        break;
    case(percentage > 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}
console.log(`Percentage: ${percentage}, Grade: ${grade}`);
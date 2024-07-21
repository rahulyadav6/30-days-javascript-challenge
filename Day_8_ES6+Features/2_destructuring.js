/*
Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the
console.
*/
let arr = [10,2,3,4,5];

const [firstnum,secondnum] = arr;
console.log(firstnum);
console.log(secondnum);

/*
Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
*/
const book = {
    title: "Physics",
    author:"Albert Eistine",
    noOfPages:123
}
const {title,author} = book;
console.log(title);
console.log(author);


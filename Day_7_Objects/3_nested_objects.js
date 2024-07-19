/*
Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and
log the library object to the console.
*/

const library = {
    name: "Central library",
    books: [
        {
            name:"physics",
            edition:10,
            pages:1000
        },
        {
            name:"chemistry",
            edition:12,
            pages:500
        },
    ]
}

console.log(library);





/*
Task 6: Access and log the name of the library and the titles of all the books in the library.
*/
console.log(library.name);
const {name,books} = library;   //destructuring
console.log(books);
for(let book of books){
    console.log(book.name);
}
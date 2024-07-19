/*
Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and
log the result of calling this method.
*/
const book = {
    title:"Physics",
    author:"Rahul",
    year:1999,
    printTitle:function(){
        console.log(`Title of book is ${this.title} and year of publication is ${this.year}`);
    }
}
book.printTitle();
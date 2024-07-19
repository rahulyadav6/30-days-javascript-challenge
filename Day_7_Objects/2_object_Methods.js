/*
Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling
this method.
*/

const book = {
    title:"Physics",
    author:"Rahul",
    year:1999,
    printTitle:function(){
        console.log(`Title of book is ${this.title} and author is ${this.author}`);
    },
    updateYear: function(y){
        this.year = y;
    }
}
book.printTitle();





/*
Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the
updated object.
*/

book.updateYear(2002);
console.log(book);


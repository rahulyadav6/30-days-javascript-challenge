/*
Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
*/
const book = {
    title:"Physics",
    author:"Rahul",
    year:1999,
}

for(key in book){
    // console.log(key);
    console.log(`${key} : ${book[key]}`);
}


/*
Task 9: Use object. keys and object.values methods to log all the keys and values of the book object.
*/
let keys = Object.keys(book)
keys.forEach((key)=>{
    console.log(key);
})

let values = Object.values(book);
values.forEach((value)=>{
    console.log(value);
})



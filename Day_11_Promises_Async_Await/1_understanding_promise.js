let promise = new Promise((res,rej)=>{
    setTimeout(() => {
        res("Timeout resolved after 2 second");
    }, 2000);
})
let promise2 = new Promise((res,rej)=>{
    setTimeout(() => {
        rej("Timeout rejected after 2 seconds");
    }, 2000);
})

promise.then((message)=>{
    console.log(message);
})


promise2.catch((error)=>{
    console.error(error)
})
const promise1 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("Promise 1 resolved");
    }, 1000);
});

const promise2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise 2 resolved");
    },2000)
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
.then(value =>{
    console.log(value);
})
.catch(error =>{
    console.error("One of the promise rejected", error);
})
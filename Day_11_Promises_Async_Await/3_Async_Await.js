/*
• Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
*/
function examplePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved successfully");
        }, 2000);
    });
}

async function waitForPromise() {
    try {
        const result = await examplePromise();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

waitForPromise();

/*
• Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
*/


function examplePromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise rejected successfully");
        }, 2000);
    });
}

async function waitForPromise2(){
    try{
        const result2 = await examplePromise2();
        console.log(result2);
    }catch(error){
        console.error(error);
    }
}
waitForPromise2();
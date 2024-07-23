/*
• Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a
specific order.
*/

function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from server 1");
        }, 1000);
    });
}

function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from server 2");
        }, 2000);
    });
}

function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from server 3");
        }, 3000);
    });
}

fetchData1()
    .then((message1) => {
        console.log(message1); 
        return fetchData2();
    })
    .then((message2) => {
        console.log(message2); 
        return fetchData3();
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

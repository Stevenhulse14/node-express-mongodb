/*
    7. Example of an asynchronous function
*/

async function orderingMcDonalds() {
    // When you make an order, you get back a receipt. This is a promise that you will get your food when it's done
    const receipt = new Promise((resolve, reject) => {
        setTimeout(() => resolve({mcDouble: 1, mcChicken: 1, nuggets: 2, drinks: 2}), 3000);
    });

    const myOrder = await receipt; // wait until the promise resolves (*)

    console.log(myOrder); // {mcDouble: 1, mcChicken: 1, nuggets: 2, drinks: 2}
}

// console.log("This is before ordering");
// orderingMcDonalds();
// console.log("This is after ordering");

/*
    8. Use `fetch()` and async-await to write an async function that makes an HTTP request
*/
async function fetchData() {
    const returnData = await fetch("https://whatthecommit.com/index.txt");
    const commitMessage = await returnData.text();
    console.log(commitMessage);
}

console.log("before");
fetchData();
console.log("after");

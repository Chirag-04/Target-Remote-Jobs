// //
// Problem: Fetching Data with Delays
// Suppose you are creating a simple program that mimics data fetching from a server with different response times. You’ll need to create two functions:

// fetchUserData: This function returns a promise that resolves after 2 seconds with a user object ({ id: 1, name: "Chirag", age: 21 }).
// fetchUserPosts: This function returns a promise that resolves after 1 second with an array of posts, e.g., [{ postId: 1, content: "Hello World!" }, { postId: 2, content: "Practicing promises and async/await" }].
// Your Task:

// Create these functions using Promise.
// Write an async function called displayUserData that:
//
function fetchUserData(){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve({ id: 1, name: "Chirag", age: 21 });
        } , 2000) // 2 second
    });
    return p;
}

async function main(){
    const value = await fetchUserData(); // accepts a promise
    console.log(value);
}
main();
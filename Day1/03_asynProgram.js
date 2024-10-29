// async programming= js thread will not wait to complete asyn task

console.log("Clg1");

setTimeout(()=>{
    console.log("SetTimeout1");
} , 2000);

// what if 
setTimeout(() =>{
    console.log("setTimeout2")
} , 0);  // now will it work synchrnously or asynchronously 
console.log("Clg2");

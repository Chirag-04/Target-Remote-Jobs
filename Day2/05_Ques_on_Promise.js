// Question:
// Create a function called checkIfEven that:

// Takes a number as an argument.
// Returns a Promise that resolves with "The number is even" if the number is even.

function checkIfEven(num){
    const p = new Promise(function(resolve){
        if(num% 2 == 0){
            resolve("The number is even");
        }else{
            reject("The number is even");
        }
    });
    return p;
}

checkIfEven(1011)
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})
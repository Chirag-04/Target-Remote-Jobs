// cleaner/readable way of writing async programming 
// under the hood they are callback
// so lets conver the callback code to promise 
// returns promise and does not expect a callback
function ChiragSetTimeOut(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("done");
        }, duration);  
    })
    return p; // return promise
}
ChiragSetTimeOut(1000)
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err);
})
// this is how we call a promise 
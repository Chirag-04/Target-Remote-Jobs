// how to write our own asyn function
// way 1 is to use other async functions

function sayDone(){
    console.log("done");
}
function ChiragSetTimeOut(fn , duration){
    setTimeout(fn , duration);
}

ChiragSetTimeOut(sayDone ,1000 );

// ChiragSetTimeOut will not delegated to web api
// setTimeout will be delegated


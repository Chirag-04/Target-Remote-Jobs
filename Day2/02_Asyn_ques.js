
setTimeout(function(){
    console.log("ID1");
    setTimeout(function(){
        console.log("ID:2");
    } , 2000);
    console.log("ID:3");
} , 5000);
// ID1 
// ID3
// ID2
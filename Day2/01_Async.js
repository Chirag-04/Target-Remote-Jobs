const fs =  require('fs');

fs.readFile('a.txt'  , 'utf-8' , (err, data)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log(data);
    }
})
console.log("done");

// done 
// data from a.txt
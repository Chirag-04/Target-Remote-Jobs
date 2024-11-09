const express = require('express');
const port = 3000;
const app = express();

app.get('/' , function(req , res){
    res.json({
        msg : "Welcome to homepage"
    })
})

function kidneyMiddleware( req ,res , next){
    let kidneys =  req.query.kidneyId;
    if( kidneys<=0 || kidneys >2 ){
        res.status(401).json({
            msg : "You are not a valid patient"
        })
    }else{
        next();
    }
}
function userMiddleware(req , res , next){
    let username =  req.headers.username;
    let password =  req.headers.password;
    if(username != 'admin' || password != 'pass'){
        res.status(401).json({
            msg : "You are not a valid patient"
        })
    }else{
        next();
    }
}
app.get('/checkup' ,kidneyMiddleware ,  userMiddleware , function(req ,res){
    // a lot more clean code
    res.send("You are a valid patient");

})

app.listen(port ,function(req , res){
    console.log(`Server running at ${port}`)
})
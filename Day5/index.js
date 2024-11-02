const bodyParser = require('body-parser');
const express =  require('express');
const app = express();
const port = 8000;
app.get('/' , function(req , res){
    res.send("Hello Everyone! This is the server created by chirag");
})

app.use(bodyParser.json());

app.post('/add' , function(req , res){
    console.log(req.headers);
    console.log("req-body"  , req.body);
    res.send({
        "msg" : "Everything is working fine"
    });
})

app.listen(port , function(){
    console.log(`Server running on port ${port}`);
})

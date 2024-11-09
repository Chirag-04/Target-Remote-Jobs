const express =  require('express');
const app = express();
const port = 3000;
const zod  = require('zod');
app.use(express.json());

const mySchema =  zod.array(zod.number());

app.post("/checkup" ,function(req ,res){

    const kidneys = req.body.kidneys;
    const response  = mySchema.safeParse(kidneys);
    if(response.success === false){
        res.send({
            msg : "Please enter correct input"
        })
        return; // early return
    }
    const kidneyLength =  kidneys.length;
    res.send("you have " + kidneyLength + " kidneys");
})


app.listen(port, function(){
    console.log(`Server running at port : ${port}`)
})
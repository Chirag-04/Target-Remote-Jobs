// how to expose logic => by creating server
const express = require("express");
function SumTillN(n){
    let sum  = 0;
    for(let i=1 ; i<=n ; i++){
        sum+=i;
    }
    return sum;
}
const app = express();
const port = 3000;
app.get('/' , function(req ,res){
    const n = req.query.n;
    const ans  =  SumTillN(n);
        res.send(ans.toString());
})

app.listen(port , function(){
    console.log(`Server is running at ${port}`);
})
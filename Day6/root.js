const express = require('express');
const app = express();
const port =  3000;

const users = [
    {
        name: 'john',
        kidneys: [
            { healthy: false },
            { healthy: true },
            { healthy: false },
            { healthy: false },
            { healthy: true },
            { healthy: false }
        ]
    },
    {
        name: 'matt',
        kidneys: [
            { healthy: false },
            { healthy: true },
        ]
    },
];

app.get("/" , function(req , res){
    // i need to return totatl number of kidneys , total number of healthy kidneys and toatl number of unhealthy kidneys
    let nameOfguy = req.query.name;
    // console.log(nameOfguy);
    // console.log(typeof(nameOfguy));
   let people;
   for(let i=0 ; i<users.length ; i++){
    if(users[i].name  == nameOfguy){
        console.log("Yes");
        people =  users[i].kidneys;
    }
}
   let totalKidney = people.length;
   let healthyKidney =  0 ;
   for(let i=0 ; i<totalKidney ; i++){
    if(people[i].healthy == true){
        healthyKidney++;
    }
   }

   let unhealthyKidney = totalKidney - healthyKidney;
   console.log(healthyKidney);
   res.json({
    totalKidney ,
    healthyKidney,
    unhealthyKidney
   })
});

// app.post("/" , function(req , res)){
    
// }

// app.put("/" , function(req , res)){
    
// }

// app.delete("/" , function(req , res)){
    
// }


app.listen(port , function(){
    console.log("Server running!!")
})
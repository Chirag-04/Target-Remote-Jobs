const express = require('express');
const app = express();
const port =  3000;
app.use(express.json()); // middleware
function anyBadKidney(){
    let isPresent = false;
    for(let i=0 ; i<users[0].kidneys.length ; i++){
        if(!users[0].kidneys[i].healthy){
            isPresent = true;
        }
    }
    return isPresent;
}
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

// // let say i want to add a kidney 
app.post("/" , function(req , res){
    // most common method to take input in post method is body 
    const isHealthy =  req.body.isHealthy;
    users[0].kidneys.push({healthy : isHealthy})
    res.json({
        msg : "New Kidney added"
    })
})

app.put('/' , function(req , res){
    let isPresentBadKidney =  anyBadKidney();
    if(!isPresentBadKidney){
        res.status(411).json({
            msg : "no unhealthy kidneys"
        })
    }
    for(let i=0 ; i<users[0].kidneys.length ; i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg : "All kidenys updated"
    })
})


// to delete all the unhealthy kidenys

// couple of ways to achieve this 

// task is to check whether a user has a bad kidney or not 

app.delete('/', function(req , res){
    let isPresentAnybadKidney =  anyBadKidney();
    console.log("any bad kidney" ,isPresentAnybadKidney);
    if(!isPresentAnybadKidney){
        res.status(411).json({
            msg : "You dont have any bad kidney"
        })
    }
    const newKidneys = [];
    for(let i=0; i<users[0].kidneys.length ; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg : "unhealthy kidneys removed"
    })
})

app.listen(port , function(){
    console.log("Server running!!")
})
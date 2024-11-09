const express =  require('express');
const app = express();
const port = 3000;
app.use(express.json());
// routes 
const users =  require('./MOCK_DATA (1).json');
// homepage
app.get('/', function(req ,res){
    res.send("<h1>Hi! This is HomePage</h1>");
})


// all users
// /users ==> depicts that it will return html data
// good practice to use /api/users so that difference client can use it 
app.get('/users', function(req, res) {
    const htmlContent = `
    <ul>
       ${users.map((user)=> 
   ` <li>${user.first_name}</li>`
    ).join('')}
    </ul>
    `;
    console.log(typeof(htmlContent)); // string
    res.send(htmlContent);
    //The <pre> tag in HTML stands for "preformatted text." It displays text exactly as it is written in the HTML source
});

// 
app.get('/api/users', function(req ,res){
    console.log(typeof(users));   // object
    res.json(users);
})


// 
app.get('/api/users/:id' , function(req  ,res){
    const userid =  Number(req.params.id);
    console.log(userid);
    console.log(typeof(userid));
    if(userid > users.length){
        res.status(411).json({
            msg : "No user found"
        })
    }
    let user_detail;
    for(let i=0 ; i<users.length ; i++){
        if(users[i].id  === userid){
            user_detail = users[i];
            break;
        }
    }
    console.log(user_detail);
    res.json(user_detail);
})
// add a user 
app.post('/api/users' , function(req , res){
    const data =  req.body;
    console.log(data);
    const newUser = {
        "id" : users.length+1,
        ...data
    }
    users.push(newUser);
    res.send("post");
})
app.listen(port , function(){
    console.log(`Server is running at ${port}`);
})

const zod = require('zod');
function validateUser(obj){
    const mySchema =  zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })

    const response =  mySchema.safeParse(obj); // time to check input
    console.log(response);
}

validateUser({
    email : "chiragnsut04@gmail.com" ,
    password : "1223344556677889"
});


// question 1 check if the input is an array of numbers

// function validatInput(arr){
//     const mySchema =  zod.array(zod.number());// this is how my input should look like 
//     const response =  mySchema.safeParse(arr);
//     console.log(response);
// }

// validatInput(["1"]);

// _______________________________________________________________


// question 2 

const zod = require('zod');
function validateUser(obj){
    const mySchema =  zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })

    const response =  mySchema.safeParse(obj); // time to check input
    console.log(response);
}

 


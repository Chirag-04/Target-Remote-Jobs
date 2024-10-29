function square(n){
    return n*n;
}
function cubes(n){
    return n*n*n;
}
function sum_of_square(a , b){
    let x= square(a);
    let y =square(b);
    return x+y;
}
function sum_of_cubes(a , b){
    let x = cubes(a);
    let y = cubes(b);
    return x+y;
}

// we have to find sum of squares
let ans  = sum_of_square(1 , 2);
let ans2 =  sum_of_cubes(2 , 3);
console.log(ans);
console.log(ans2)

// but this code is not modular 
// and violating DRY principle (dont repeat yourself)
function square(n){
    return n*n;
}
function cubes(n){
    return n*n*n;
}
// we will pass function as an argument 
function sumGeneral(a , b , fn){
    let x =  fn(a);
    let y =  fn(b);
    return x+y;
}

console.log(sumGeneral(8 , 2 , square)); // we are passing fn as an argument 
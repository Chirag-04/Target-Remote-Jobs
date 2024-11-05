// map is generally used to alter the elements in an array 
const input = [1,2,3,4,5];
// suppose we have to multiply each number by 2 and retunrn a new array
// we will have something called transform logic 
function transform(n){
    return n*2;
}
const newArray =  input.map(transform);
console.log(newArray);
// another way 
const newArr = input.map((i)=>{
    return i*3;
})
console.log(newArr);
// filter is used to filter out things
// for example :  return an array containing only even elements
function filterLogic(m){
    if(m % 2 == 0) return true;
    return false;
}
const newNum = input.filter(filterLogic);
console.log(newNum);

const newNums = input.filter((key)=>{
    if(key%2 != 0) return true;
    else return false;
} )

console.log(newNums);


// ___________________
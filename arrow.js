// function declaration

function add(a,b){
    const result=a+b;
    return result
}
const finalResult=add(5,7);
console.log(finalResult)

// function expression
const add1=function(a,b){
    const result=a+b;
    return result
}
const value=add1(4,5);
console.log(value)

// arrow function
const add2=(a,b)=>{
    const result=a+b;
    return result;
}
const arrowResult=add2(5,5);
console.log(arrowResult);
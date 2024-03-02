function squares(n){
    return n*n;
}

function sumOfSquares(a,b){
    const val1=squares(a);
    const val2= squares(b);
    return val1+val2;
}

console.log(sumOfSquares(2,3));

function square(a){
    return a*a;
}
function sumOfSomething(a,b,fn){
    const v1 =fn(a);
    const v2= fn(b);
    return v1+v2;
}
console.log(sumOfSomething(2,3,square))
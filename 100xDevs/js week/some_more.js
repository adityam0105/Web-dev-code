//Arrows
// function sum(a,b){
//     return a+b;
// }

// const sun = (a,b)=>{
//     return a+b;
// }

const ipn =[1,2,3,4,5];

//mappings

// const ans =ipn.map(function (i){
//     return i*2;
// })
// console.log(ans);

//filtering

const ans = ipn.filter((n)=>{
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans);

//starts with
console.log("aditya".startsWith("a"));
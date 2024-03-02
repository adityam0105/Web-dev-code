// function Sum(a,b){
//     return a+b;
// }

// const value = Sum(1,2);
// console.log(value);

// Callbacks
function sum(n1, n2, fnToCall){
    let res=n1+n2;
    fnToCall(res);
}

function display_res(data){
    console.log("Result of the sum is: "+ data);
}
function display_res_passive(data){
    console.log("Sum's result is: "+ data);
}

sum(3,9,display_res_passive);
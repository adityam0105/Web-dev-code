// falsy values
// false, 0 ,-0,BigInt 0n,"",null, undefined, NaN 
//everything else is a truthy

//truthy values
//"0",'false'," ",[],{}, function(){}

//empty object check
const emptyObj={1:"numb"}
if(Object.keys(emptyObj).length===0){
    console.log("You are empty brother...")
}
else {
    console.log("Not empty Brother...")
}

function identity<T>(arg:T){
    return arg;
}
function getFirstElement<T>(arr:T[]):T{
    return arr[0];
}
// let output1= identity<string>("myString")
// let output2=identity<Number>(200)
// console.log(output1.toUpperCase())
// console.log(output2)
const el= getFirstElement<string >(["Aditya","Anurag"])
console.log(el.toLowerCase())

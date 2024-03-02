interface User4{
    firstName: string,
    lastName:string,
    email:string, //email?:string,
    age:number,
};
type User2={
    firstName:string,
    lastName:string,
    email:string
}
function isLegal(user:User4):boolean{  //obj:interfaceName
    if(user.age>18) return true;
    else return false;
}
console.log(isLegal({
    firstName:"Aditya",
    lastName:"Gupta",
    email:"adi@gmail.com",
    age:46,

}))
function addTwo(num:number){
    return num+2;
}

function getUpper(str:string){
    return str.toUpperCase()
}

function signUp(name:string,username:string,logged:boolean):object{
    return{
        name,
        username,
        logged
    }
}

const getReturn = (n:number):number|boolean=>{
    if(n>5){
        return n+5;
    }
    return false;
}
function consoleError(errmsg:string): void{
    console.log(errmsg);
}
function fail(msg:string):never{
    throw new Error(msg);
}
// console.log(addTwo(5))
// console.log(signUp("aditya" , "adi33",true))
console.log(getReturn(1))
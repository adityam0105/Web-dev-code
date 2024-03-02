const mySym = Symbol("useinMyUser") 
const myUser= {
    "names":"Aditya",
    phone: 12345,
    isLoggeed:false,
    [mySym] : "key2",
    days: ["monday","Tuesday","Wednesday"]
}
console.log(myUser["names"])
// Object.freeze(myUser)
phone =345
// console.log(typeof mySym)

myUser.greetings = function(){
    return "My name is";
}
console.log(myUser.greetings());
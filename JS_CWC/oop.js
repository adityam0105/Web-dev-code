const user={
    fname: "Aditya",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function(){
        return `Got details from ur database of ${this.fname}`
    }
}
// console.log(user.fname)
// console.log(user.getUserDetails())

function User(username,loginCount,isLoggedIn){
    this.username= username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    return this

}

const userOne =new User("Hitesh",12,true)
const userTwo =new User("Atish",2,false)
console.log(userOne)
console.log(userTwo)

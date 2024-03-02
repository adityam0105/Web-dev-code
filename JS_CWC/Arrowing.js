const user= {// this helps to know the variables current context
    //browsers global object: window object
    fname: "Aditya",
    number: 22,
    welcomeMessage: function(){
        console.log(`${this.fname}, welcome to my webpage`)
    }
}
user.welcomeMessage()
user.fname="Anurag"
user.welcomeMessage()
// console.log(this)

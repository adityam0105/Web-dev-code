type User ={
    name:string
    email:string
    isActive:boolean
}
function logUser(user:User):User{
    return({email:user.email,name: user.name, isActive:user.isActive})
}
console.log(logUser({name: "a@a.com", email: "Aditya", isActive: true}))

type myUser= {
    _id:string
    fname:string
    email:string
    isActive:boolean
}
function createmyUser(user:myUser):myUser{
    return{
        _id:user._id,
        fname:user.fname,
        email:user.email,
        isActive:user.isActive
    }
}
console.log(createmyUser(
    {
        _id:"123",
        fname:"adi",
        email:"a@gmail.com",
        isActive:true
    }
))
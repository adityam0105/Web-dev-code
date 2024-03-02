
class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPwd(){
        return `${this.password}**abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai= new User("chai","chai@gmail.com","Aditya");
console.log(chai.encryptPwd());
console.log(chai.changeUsername());

//can also follow the function prototype pattern
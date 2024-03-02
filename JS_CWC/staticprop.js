class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`My username is: ${this.username}`);
    }
    static createId(){// only can be used inside the class
        return `123`;
    }
}
class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const adi= new User("aditya");
// adi.logMe()
// console.log(adi.createId());
const onepiece= new Teacher("pirate","hello@email.com")
onepiece.logMe();
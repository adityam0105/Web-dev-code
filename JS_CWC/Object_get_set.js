const User={
    _email:'a@abc.com',
    _password:"abc",
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}
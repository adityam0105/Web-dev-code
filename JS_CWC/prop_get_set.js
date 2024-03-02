function User(email,password){
    this._email=email;
    this._password=password;
    Object.defineProperty(this,'email', {
        get: ()=>{
            return this._email.toUpperCase();
        },
        set: (value)=>{
            this.email=value;
        }
    })
}
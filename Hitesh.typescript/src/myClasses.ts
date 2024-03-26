class UsingClasses{
    // public classyEmail: string //implicitly everything is public
    // public classyPass:string
    private readonly random:string= "nope"
    protected _courseCount:number=1
    constructor(public classyEmail:string,public classyPass:string){
        this.classyEmail=classyEmail
        this.classyPass=classyPass
    }
    get appleEmail():string{
        return `apple${this.classyEmail}`
    }
    get courseCount():number{
        return this._courseCount;
    }
    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error
        }
        this._courseCount=courseNum
    }
}
class newClass extends UsingClasses{
    _courseCount=10 // valid when property is protected or public
}
const adityaa=new UsingClasses("hello","123")
console.log(`${adityaa.classyEmail} and ${adityaa.classyPass}`)
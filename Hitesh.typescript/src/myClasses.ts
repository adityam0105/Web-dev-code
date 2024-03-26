class UsingClasses{
    // public classyEmail: string //implicitly everything is public
    // public classyPass:string
    private readonly random:string= "nope"
    constructor(public classyEmail:string,public classyPass:string){
        this.classyEmail=classyEmail
        this.classyPass=classyPass
    }
}

const adityaa=new UsingClasses("hello","123")
console.log(`${adityaa.classyEmail} and ${adityaa.classyPass}`)
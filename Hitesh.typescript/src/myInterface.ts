interface userDetails{
    email:string,
    userId:string|number,
    empId?:string,
    // joined: ()=>string
    joined():string
    // getBonus(amount:number,department:string):number
}

const aditya:userDetails={
    email:"a@adi.com",
    userId:2,
    joined() {
        return "I have joined"
    },
}
console.log(aditya)
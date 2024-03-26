function detectType(val:number|string):boolean|string{
    if(typeof val==="string"){
        return "I am your string"
    }
    return false
}

function provideId(id:string|null):string|undefined{
    if(!id){
        console.log("please provide an id")
        return
    }
    return "Id created succesfully"
}


let score:number|string=33

type Userr ={
    name:string;
    id:number
}

type Admin={
    username:string;
    id:number
}

let adi:Userr|Admin= {name:"aditya",id:334}
adi={username:"am",id:336}

function getDbId(id:number|string):number|string{
    if(typeof id === "string"){
        id.toLowerCase()
    }
    if(typeof id === "number"){
        return id+2;
    }
    return "not a number"
}
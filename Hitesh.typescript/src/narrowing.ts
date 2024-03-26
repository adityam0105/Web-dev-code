interface webUser{
    name:string,
    email:string
}

interface webAdmin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdminAccount(account:webUser|webAdmin):boolean{
    if("isAdmin" in account){
        return true
    }
    return false
}

type Fish = {swim:()=>void}
type Bird = {fly:()=>void}

function isFish(pet:Fish|Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        return "fish Foood"
    }else{
        pet 
        return "bird Foood"
    }
}
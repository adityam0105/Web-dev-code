interface User{
    firstName:string;
    lastName:string;
    age:number;
}

function filteredUsers(users:User[]){
    return users.filter(x=>x.age >=18)
}

console.log(filteredUsers([{
    firstName:"Aditya",
    lastName:"Ray",
    age:19
},{
    firstName:"Satyajeet",
    lastName:"Ray",
    age:66
}]))
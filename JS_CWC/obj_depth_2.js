const { object } = require("zod")

const myObj ={
        name: "Aditya",
        phone: 134589,
        isLoggedin: false,
        intern : true   
}

// console.log(myObj.names.name2)
const obj1 ={1:"text",2:"call"}
const obj2 ={3:"look",4:"gone"}
// const obj3 ={...obj1,...obj2};
// const obj3= Object.assign({},obj1,obj2)
const obj3= {obj1,obj2}

// console.log(obj3)
const users =[{
    id:1,
    email: "aditya@MediaMetadata.com",
    number: 1234,
    isJoinned: false
},
{
    id:2,
    email: "ad@data.com",
    number: 12,
    isJoinned: true
},{
    id:3,
    email: ["adidata.com","ab","bba"],
    number: 2,
    isJoinned: undefined
}
]
// console.log(Object.values(myObj))
// console.log(Object.keys(myObj))
console.log(Object.hasOwnProperty('is name'))
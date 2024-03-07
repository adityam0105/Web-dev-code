import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        email:username,
        password,
        firstName,
        lastName
    }
  })
  console.log(res);
}

interface updateParams {
    firstName:string;
    lastName:string
}

async function updateUser(username:string,{
    firstName,
    lastName
}:updateParams) {
    const res =await prisma.user.update({
        where :{
            email:username
        },
        data:{
            firstName,
            lastName
        },
        select:{
            firstName:true,
            lastName:true
        }
    })
    console.log(res)
}

async function getUserInfo(username:string) {
    const res =await prisma.user.findFirst({
        where :{
            email:username
        },
        select:{
            firstName:true,
            lastName:true,
            email: true,
        }
    })
    console.log(res);
}
// insertUser("admin1", "123456", "harkirat", "singh")
// updateUser("admin1",{
//     firstName : "Aditya Was Here",
//     lastName :"Tenn"
// })
getUserInfo("admin1")
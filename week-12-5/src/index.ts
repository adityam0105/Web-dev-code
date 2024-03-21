import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string,
//   email:string
// ) {
//    const res= await prisma.user.create({
//         data:{
//             username,
//             password,
//             firstName,
//             lastName,
//             email
//         }
//     })
//     console.log(res);
// }
// insertUser('test123','test','test','test','test123');

async function getTodosAndUserDetails(userId:number){
    // await prisma.todo.create({
    //     data:{
    //         title:'Learn Prisma',
    //         description:'Learn Prisma with TypeScript',
    //         userId:userId
    //     }
    // });
    const response= await prisma.todo.findMany({
        where:{
            userId:userId
        },
        select:{
            id:true,
            title:true,
            description:true,
            user:true,
        }
    })
    console.log(response);
}
getTodosAndUserDetails(2);
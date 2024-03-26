// import {z} from 'zod'
// import express from 'express'

// const app = express();
// const userProfileSchema = z.object({ //only used in the backend
//    name: z.string().min(1),
//     email:z.string().email(),
//     age:z.number().min(18).optional()
// });

// type FinalUserSchema =z.infer<typeof userProfileSchema>; //useful for a frontend when we export this

// app.put("/user", (req,res)=>{
//     const {success} = userProfileSchema.safeParse(req.body);
//     const updatedateBody:FinalUserSchema =req.body;
//     if(!success){
//         res.status(411).json({});
//         return
//     }
// })

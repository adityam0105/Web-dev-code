// const promiseOne= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Hello...");
//         resolve();
//     },5000)
// })

// const { rejects } = require("assert");

// promiseOne.then(()=>{
//     console.log("Promise consumed...");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//     },1000)
//     resolve();
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// const promiseThree= new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve({username: "Chai", email:"aditya@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
// console.log(user)})

// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error =true;
//         if(error){
//             resolve({username:"Aditya", password:"pwd"})
//         }
//         else{
//             reject('ERROR: Something went wrong...')
//         }
//     },2000)
// })
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(`My user is ${username}`)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejected...")
// })

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error =false;
//         if(!error){
//             resolve({username:"javascript", password:"123"})
//         }
//         else{
//             reject("OOPS something went Wrong!!!")
//         }
//     },2000)
// })
// async function comsumeMyPromise(){
//     const response= await promiseFive
//     console.log(response);
    
// }
// comsumeMyPromise()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((r)=>{
    console.log(r);
})
.catch((e)=>{
    console.log(e);
})
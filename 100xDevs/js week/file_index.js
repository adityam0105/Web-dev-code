const fs=require("fs");

fs.readFile("/Users/aditya_0105mac/Desktop/100xDevs/js week/a.txt","utf-8",function(err,data){
    console.log(data);
})
console.log("Hi there buddy")
//Busy waiting start
let a=0;
for(let i=0;i<1000000000;i++){
    a++;
}
// Busy waiting end
console.log("hi there 2")
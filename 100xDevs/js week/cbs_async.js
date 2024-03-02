const fs=require('fs')


function adityaReadFile_cb(cb){
    fs.readFile("/Users/aditya_0105mac/Desktop/100xDevs/a.txt","utf-8", function(err,data){
        cb(data);
    });
}
function onData(data){
    console.log(data);
}
adityaReadFile_cb(onData);
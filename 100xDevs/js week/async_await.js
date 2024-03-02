function my_Async_function(){
    
    let p = new Promise(function(resolve){
        resolve("hola amigo!");
    });
    return p;
    
    
}

async function main(){
    const value= await my_Async_function();
    console.log(value);
}
main();
function My_async(){
    let p= new Promise(function(resolve){
        setTimeout(resolve,5000)
    });
    return p;
}
const value= My_async();

value.then(function(){
console.log("Heyy");
});
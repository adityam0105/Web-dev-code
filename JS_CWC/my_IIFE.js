//Immedietly invoked function definition
// helps avoiding the pollution from the global scope

(function fame(){
    //named iffe
    console.log("My name is Aditya...")
})();

// arrow IFFE
( (fname)=>{
    //un-named Iffe
    console.log(`Show my name ${fname}`)
} )(`Anurag`)


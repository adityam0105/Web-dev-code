function myOwnSt(fn,duration ){
 setTimeout(fn, duration)
}
 myOwnSt(function(){
console.log("hello");
 },4000)

 function myPromisified(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    });
    return p;
 }

 const ans = myPromisified(3000);
 ans.then(function(){
    console.log("Timeout is done...")
 })
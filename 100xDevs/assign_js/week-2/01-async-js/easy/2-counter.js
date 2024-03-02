// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let initialCount=0;
const timer = ()=>{
    console.log(`timer: ${initialCount}`)
    initialCount++;
    setTimeout(timer,1000);
};
timer();
let myName="aditya"
let myChannel= "Shady"

let myHeroes=["thor","spiderman"]
let heroPower={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower:function(){
        console.log(`Spidey's superpower is ${this.spiderman}`);
    }
}
Object.prototype.aditya= function(){
    console.log("Aditya is present here...")
}
heroPower.aditya()
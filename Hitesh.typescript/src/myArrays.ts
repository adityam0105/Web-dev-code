const data:number[] = [1,2,3,4,5]
const data2:(number|string)[] =['1','2','3','4','5']
const data3: Array<number|boolean>= [1,false,true,2]

for (let i = 0; i < data3.length; i++) {
    console.log(data3[i]);
}

let travel:"bus"|"train"|"bike";
// travel="bicycle"
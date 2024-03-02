const ages =[21,22,23,24,25,26,27,28,30,33,54,35];
// ARRAYS

for (let index = 0; index < ages.length; index++) {
    const element = ages[index];
    if(element%2==0){
        console.log(element);
    }
}

// COMPLEX OBJECTS
const All_users= [
    {fname:"Aditya",
    gender: "male"},
    {fname:"Anurag",
    gender: "male"},
    {fname:"Priya",
    gender: "female"}
]
for (let i = 0; i < All_users.length; i++) {
  
  if(All_users[i]["gender"]=="male"){
    console.log(All_users[i]["fname"]);
  }  
}
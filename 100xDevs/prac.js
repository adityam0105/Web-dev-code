const axios= require("axios")
// (()=>{
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async response=>{
//         const json=await response.json()
//         console.log(json.todos.length)
//     })
// })();

async function main(){
    const res=await axios.get("https://sum-server.100xdevs.com/todos")
    //need to do a respose.data
    console.log(res.data.todos.length)
}
main();
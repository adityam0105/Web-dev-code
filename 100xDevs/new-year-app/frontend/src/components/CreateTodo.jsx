import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");

    return <>
        <div>
            <input id="title" type="text" placeholder="title" onChange={(e)=>{
                const value=e.target.value
                setTitle(e.target.value)
            }}/> <br />
            <input type="text" id="desc" placeholder="description" onChange={(e)=>{
                const value=e.target.value
                setDescription(e.target.value)
            }} /> <br />
            <button onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method:"POST",
                    body:JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers:{
                        "Contenyent-type": "application/json"
                    }
                })
                .then(async (res)=>{
                    const json=await res.json();
                    alert("Todo Added!")
                })
            }}>Add a todo</button>
        </div>
    </>
}
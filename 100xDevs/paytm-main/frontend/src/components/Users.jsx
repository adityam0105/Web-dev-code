//contains state management

import { useState } from "react"
import { Button } from "./Button";


export const Users = ()=>{
    //replace with backend call
    const[users,setUsers] =useState([{
        firstName:"Aditya",
        lastName: "Bedi",
        _id:1
    }]);
    return(
        <>
        <div className=" font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded boreder-slate-200" />
        </div>
        <div>
            {users.map( user=> <User user={user}/>)}
        </div>
        </>
    );
}

function User({user}){
    return (<div className="flex justify-between">
        <div className="flex">
            <div className="rounded full h-12 w-12 bg-slate-200 flex justify-center mt-2 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full">
            <Button label={"Send Money"}/>
        </div>
    </div>)
}
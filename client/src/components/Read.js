import { useEffect, useState } from "react";
import { baseURL } from "../API/API";
import axios from 'axios'
import '../App.css'




const  Read = () =>{
//Blog State
const [User , setUser] =  useState([]);



// Read  User From API
useEffect(()=>{
    const ReadUser  = async () =>{
       try {
        const {data} = await axios.get(baseURL);
        setUser(data.data)
        console.log(data)
       } catch (error) {
        console.log(error)
       }
    }
    ReadUser()
},[]);


return (
        <div>
             <h1>User List</h1>
             <div>
             {
                    User?.map(user => {
                        return(
                            <>
                            <div key={user.id}>
                            <h1>{user?.firstname}</h1>
                            <h1>{user?.lasttname}</h1>
                            <h1>{user?.mail}</h1>
                            </div>
                          
                            </>
                        )
                    
                    })
                }
             </div>
        
         
        </div>
 );
};

export default Read
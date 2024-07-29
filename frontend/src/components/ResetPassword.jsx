import React from "react"
import api from "../../api"
import { useState } from "react"
import { Navigate } from "react-router-dom";

function ResetPassword(){
    
    const [newpassword,setNewpassword]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        // api.put('/home/update/user/',{newpassword});
        
        // console.log("Clicked");
        // <Navigate to={"/"}/>;
        // alert("reset password")
        
    }

    






    return <>
    
    <div  className="reset-password">
        <form onSubmit={handleSubmit} className="form-container" >
            <input type="password" placeholder="Enter New Password" value={newpassword} onChange={(e)=>setNewpassword(e.target.value)}   />
            <button className="form-button" type="submit">
                ResetPassword
            </button>
        </form>
    </div>
    
    </>
}
export default ResetPassword

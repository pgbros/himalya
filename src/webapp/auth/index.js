import React, { useContext, useState } from "react";
import { MyContext } from "../../MyContext";
import SignIn from "../../UI-Components/auth/signIn";
import { useNavigate } from "react-router-dom";

const Auth = () =>{
    const [mode,setMode]=useState("SIGN IN")
    const {setUserName} = useContext(MyContext)
    const navigate=useNavigate()

   function handleSignIn(name){
    setUserName(name)
    navigate("/home")

   }
   function handleSignUp(name){
    setUserName(name)
    navigate("/home")
   }

    return(
        <div>
        <SignIn mode={mode} setMode={setMode} handleSignIn={handleSignIn}/>
        </div>
    )
}
export default Auth
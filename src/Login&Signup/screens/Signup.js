import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import OverlayLoading from "../components/OverlayLoading";
import { AuthContext } from "../store/auth-context";
import { createUser } from "../util/auth";
import AuthContent from "./Authcontent";

export default function Signup(){
 
    const [isAuthenticating, setIsAuthenticating]= useState(false)
     const authCtx=useContext(AuthContext);
     const navigation=useNavigate();

    async function submitHandler(email, password){
         setIsAuthenticating(true)
        try {
            const token= await createUser(email, password);
            console.log(token)
            authCtx.authenticate(token)
        } catch (error) {
            alert('sth is wrong')
            setIsAuthenticating(false)
        }
        return  navigation('/Welcome')

    }

    if (isAuthenticating){return <OverlayLoading />}

    return(
        <>
         <AuthContent onAuthenticate={submitHandler}/>
        </>
    )
}
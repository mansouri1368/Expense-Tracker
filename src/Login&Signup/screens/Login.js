import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import OverlayLoading from "../components/OverlayLoading";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/auth";
import AuthContent from "./Authcontent";


export default function Login() {

    const [isAuthenticating, setIsAuthenticating]= useState(false)
    const authCtx=useContext(AuthContext);
    const navigation=useNavigate();

   async function submitHandler(email, password){
        setIsAuthenticating(true)
       try {
           const token= await login(email, password);
           authCtx.authenticate(token)
           

       } catch (error) {
           alert('sth is wrong')
           setIsAuthenticating(false)
       }
       
      navigation('/AllExpenses')
   }

   if (isAuthenticating){return <OverlayLoading />}

    return (<AuthContent isLogin onAuthenticate={submitHandler}/>)
}
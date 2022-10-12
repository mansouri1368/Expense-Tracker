import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchExpense } from "../../expense-tracker/store/http";
import IconButton from "../components/IconButton";
import { AuthContext } from "../store/auth-context";

export default function Welcome(){
const authCtx=useContext(AuthContext)
const navigation=useNavigate();

  
    function logoutHandler(){
       authCtx.logout()
      navigation('/')
      
    }
   

    return (
        <div>
        <IconButton icon='bug-outline' title='Log Out' onClick={logoutHandler} />
        <button onClick={()=>navigation('/AllExpenses')}>Go to main page</button>
        <h1>this is welcome page</h1>
        </div>
   
    )
}
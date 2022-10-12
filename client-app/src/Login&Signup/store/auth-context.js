import { createContext, useState } from "react"

export const AuthContext= createContext({
    token:'',
    authenticated:false,
    authenticate:(token)=>{},
    logout:()=>{}
})

export default function AuthContextProvider({children}){

    const [tokenState, setToken]= useState();
    
    function authenticate(token){
        setToken(token)
        localStorage.setItem('token', token)
    }

    function logout(){
        setToken(null)
        localStorage.removeItem('token')
    }

    const value={
        token:tokenState,
        authenticate:authenticate,
        authenticated:!!tokenState,
        logout:logout
    }

    return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
}
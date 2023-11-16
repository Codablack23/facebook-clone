"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
interface UserData{
    email:string,
    [key:string]:any
}
interface AuthContextObject{
    user:UserData | null,
    loading:boolean,
}
interface ContextProvider{
    children:ReactNode
}
export const AuthContext = createContext<AuthContextObject>({
    user:null,
    loading:true
})

export default function AuthContextProvider(props:ContextProvider){
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        console.log(user)
    },[]);
    return (
        <AuthContext.Provider value={{user,loading}}>
            {props.children}
        </AuthContext.Provider>
    )
}
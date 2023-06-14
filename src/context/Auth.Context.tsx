'use client'

import React, { createContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Api } from '../services/Api';


export const AuthContext = createContext({} as iProviderValue)

interface iAuthProviderChildren {
    children: React.ReactNode;
}
interface iInfoUser {
    token: string;
    id: string;
} 
export interface iInfoLogin {
    email: string;
	password: string;
}
interface iProviderValue { 
    logInto(infoLogin: iInfoLogin): Promise<void>;
    userLogin: iInfoUser | null;
}

export const AuthProvider = ({children}: iAuthProviderChildren) => {

    const [userLogin, setUserLogin] = useState<iInfoUser | null>(null) 
    // const navigate = useNavigate()

    const logInto = async (infoLogin: iInfoLogin) => {
        console.log(infoLogin)
        try {
            const res = await Api.post<iInfoUser>('/login', infoLogin)
            console.log(res)

            const token = res.data.token;
            const id = res.data.id;

            Api.defaults.headers.common.Authorization = `Bearer ${token} `

            toast.success('Login realizado com Sucesso!')

            // setTimeout(() => {navigate('/home')}, 2000) 

        } catch(error){

            toast.error('E-mail ou senha incorreto!')
        }

    }

    // const [InfoUser, setInfoUser] = useState<InfoUser | null>(null)

    // const token = localStorage.getItem('@token')
    // const id = localStorage.getItem('@id')
   
    // useEffect(() => {
    //     if(!token){
    //         setLoading(false)
    //         setAutoLogin(false)
    //         return
    //     }
    //     const GetInfoUser = async () =>{
    //         const config = {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }
    //         Api.defaults.headers.common.Authorization = `Bearer ${token} `
    //         try{
    //             const resposta = await Api.get(`/users/${id}`, config)
    //             setInfoUser(resposta.data)
    //             setAutoLogin(true)

    //             navigate('/home')
    //             setLoading(false)
    //         }catch{
    //             setLoading(false)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     if(id){
    //         GetInfoUser()
    //     }
    // }, [token, id])

    // if(loading){
    //     return null
    // }

    return(
        <AuthContext.Provider value={{
            logInto,
            userLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )
 } 
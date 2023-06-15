'use client'

import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Api } from '../services/Api';
import { NextRouter } from 'next/router';
import { registerSchemaType } from '@/schema/register.schema';
import Link from 'next/link';


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
    loginFunction(infoLogin: iInfoLogin): Promise<void>;
    userLogin: iInfoUser | null;
    registerFunction: (infoRegister: registerSchemaType) => Promise<void>;
}

export const AuthProvider = ({ children, router }: iAuthProviderChildren & { router: NextRouter }) => {

    const [userLogin, setUserLogin] = useState<iInfoUser | null>(null) 

    const loginFunction = async (infoLogin: iInfoLogin) => {
        try {
            const res = await Api.post<iInfoUser>('/login', infoLogin)
            console.log(res)
            
            const token = res.data.token;
            const id = res.data.id;
            Api.defaults.headers.common.Authorization = `Bearer ${token} `
            
            toast.success('Login realizado com Sucesso!')
            setTimeout(() => {
                router.push('/register');
              }, 2000);
        } catch(error){
            toast.error('E-mail ou senha incorreto!')
        }
    }
    
    const registerFunction = async (infoRegister: registerSchemaType) => {
        try {
            const transformedData = {
                name: infoRegister.name,
                email: infoRegister.email,
                password: infoRegister.password,
                confirmPass: infoRegister.confirmPass,
                cpf: infoRegister.cpf,
                phone: infoRegister.phone,
                birthdate: infoRegister.birthDate,
                seller: false,
                description: infoRegister.description,
                address: {
                    cep: infoRegister.cep,
                    city: infoRegister.city,
                    complement: infoRegister.complement,
                    number: infoRegister.number,
                    state: infoRegister.state,
                    street: infoRegister.street
                }
            };
            console.log(transformedData)
            const res = await Api.post('/users', transformedData)
            console.log(res)
            toast.success("Usuario cadastrado com Sucesso!")
            setTimeout(() => router.push('/login'), 2000)   

        } catch(error){
            toast.error("Algo deu errado cadastro!")
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
            loginFunction,
            userLogin,
            registerFunction,
        }}>
            {children}
        </AuthContext.Provider>
    )
 } 
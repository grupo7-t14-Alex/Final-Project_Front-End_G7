'use client'

import { Input } from '../../components/inputs/input';
import { Button } from '../../components/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, loginSchemaType } from '@/schema/login.schema';
import { AuthContext } from '@/context/Auth.Context';
import { useContext, useState } from 'react';
import Link from 'next/link';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function Login() {

    const { loginFunction } = useContext(AuthContext)
    
    const { register, handleSubmit, formState: { errors } } = useForm <loginSchemaType> ({
        mode: 'onBlur',
        resolver: zodResolver(loginSchema)
    })
    
    return (
        <> 
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                {/* Same as */}
            <ToastContainer />
            <Header>
                <Link href={'/login'} className='text-[#4529E6] text-center font-bold hover:text-[#5126EA] hover:scale-105 mr-12'>Fazer Login</Link>
                <Link href={'/register'}   className='bg-transparent hover:scale-105 font-bold border border-[#ADB5BD] inline-block px-4 py-2 rounded hover:bg-[#ADB5BD] hover:text-white hover:border-transparent'>Cadastrar</Link>
            </Header>
            <section className='container mx-auto p-3'>

                <div className='w-full bg-gray-1000 p-10 max-w-[450px] mx-auto rounded mt-[100px] mb-[100px]'>
                    <form className=' mb-8 w-full flex flex-col items-start' onSubmit={handleSubmit(loginFunction)}>
                      
                        <h1 className='mb-8 text-black font-bold text-[24px] leading-[30px]'>Login</h1>

                        <label htmlFor='email' className='mb-2 text-black font-medium text-[14px] leading-[17px]'>E-mail</label>
                        <Input id='email' type='text' {...register('email')} placeholder='Digite seu e-mail aqui'/>
                        {errors.email?.message && <p className='text-[14px] text-red-500'>{errors.email.message}</p>}

                        <label htmlFor='password' className='mt-8 mb-2 text-black font-medium text-[14px] leading-[17px]'>Senha</label>
                        <Input id='password' type='password' {...register('password')} placeholder='Digite seu senha aqui'/>
                        {errors.password?.message && <p className='text-[14px] text-red-500'>{errors.password.message}</p>}

                        <button className='self-end mt-8 mb-8 hover:text-[#4529E6] hover:underline hover:scale-105'>Esqueci minha senha</button>
                        <Button size='big' color='brand1' type='submit' className='w-full'>Entrar</Button>
                    </form>

                    <div className='w-full flex flex-col items-center'>
                        <p className='mb-8 '>Ainda não sou cadastrado?</p>
                        <Link
                            href={'/register'}
                            className='w-full text-center bg-gray-1000 border border-[#495057] text-[#495057] hover:bg-[#495057] hover:border-[#495057] hover:text-[#FFFFFF] py-2 px-4 rounded'
                        >
                            Cadastrar
                        </Link>
                    </div>


                </div>
            </section>
            <Footer/>
        </>
    )
}
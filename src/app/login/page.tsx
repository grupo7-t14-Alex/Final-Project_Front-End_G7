'use client'

import { Input } from '../../components/inputs/input';
import { Button } from '../../components/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, loginSchemaType } from '@/schema/login.schema';
import { AuthContext } from '@/context/Auth.Context';
import { useContext } from 'react';
import Link from 'next/link';


export default function Login() {

    const { logInto } = useContext(AuthContext)
    
    const { register, handleSubmit, formState: { errors } } = useForm <loginSchemaType> ({
        mode: 'onBlur',
        resolver: zodResolver(loginSchema)
    })

    return (
        <> 
            <Header />
            <section className='container mx-auto p-3'>
                <div className='bg-gray-1000 p-10 max-w-[450px] mx-auto rounded mt-[100px] mb-[100px]'>

                    <form className='w-full flex flex-col items-start' onSubmit={handleSubmit(logInto)}>
                        <h1 className='mb-8 text-black font-bold text-[24px] leading-[30px]'>Login</h1>

                        <label htmlFor='email' className='mb-2 text-black font-medium text-[14px] leading-[17px]'>E-mail</label>
                        <Input id='email' type='text' {...register('email')} placeholder='Digite seu e-mail aqui'/>
                        {errors.email?.message && <p className='text-[14px]'>{errors.email.message}</p>}

                        <label htmlFor='password' className='mt-8 mb-2 text-black font-medium text-[14px] leading-[17px]'>Senha</label>
                        <Input id='password' type='password' {...register('password')} placeholder='Digite seu senha aqui'/>
                        {errors.password?.message && <p className='text-[14px] text-red'>{errors.password.message}</p>}

                        <button className='self-end mb-8 mt-6'>Esqueci minha senha</button>
                        <Button size='big' color='brand1' type='submit'>Entrar</Button>
                    </form>
                        <p className='mb-8 self-center'>Ainda não sou cadastrado?</p>
                        <Link href={'/register'} >Cadastrar</Link>     
                </div>
            </section>
            <Footer/>
        </>
    )
}
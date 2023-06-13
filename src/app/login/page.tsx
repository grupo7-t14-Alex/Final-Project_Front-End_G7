'use client'

import { Input } from '../../components/inputs/input';
import { Button } from '../../components/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Api } from "@/services/Api";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
export type loginSchema = z.infer<typeof loginSchema>

// async function loginUser(loginData: any) {
//     try {
//         const validatedData = loginSchema.parse(loginData);
//         console.log(loginData);
//         const res = await Api.post('/login', validatedData);
//         console.log(res.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm <loginSchema> ({
        mode: 'onBlur',
        resolver: zodResolver(loginSchema)
    })
    const onSubmit = (data: loginSchema) =>{
        console.log(data)
    }

    return (
        <> 
            <Header />
            <section className='container mx-auto p-3'>
                <div className='bg-gray-1000 p-10 max-w-[450px] mx-auto rounded mt-[100px] mb-[100px]'>
                    <form className='w-full flex flex-col items-start' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='mb-8 text-black font-bold text-[24px] leading-[30px]'>Login</h1>

                        <label className='mb-2 text-black font-medium text-[14px] leading-[17px]'>E-mail</label>
                        <Input id='email' type='text' {...register('email')} placeholder='Digite seu e-mail aqui'/>
                        {errors.email?.message && <p className='text-[14px]'>{errors.email?.message}</p>}

                        <label className='mt-8 mb-2 text-black font-medium text-[14px] leading-[17px]'>Senha</label>
                        <Input id='password' type='password' {...register('password')}placeholder='Digite seu senha aqui'/>
                        {errors.password?.message && <p className='text-[14px] text-red'>{errors.password?.message}</p>}

                        <button className='self-end mb-8 mt-6'>Esqueci minha senha</button>
                        <Button size='big' color='brand1' type='submit'>Entrar</Button>
                    </form>
                        <p className='mb-8 self-center'>Ainda não sou cadastrado?</p>
                        <Button size='big' color='grey10' border='grey6' borderstyle={true}>Cadastrar</Button>     
                </div>
            </section>
            <Footer/>
        </>
    )
}
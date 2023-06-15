'use client'

import { Input } from '../../components/inputs/input'
import { Button } from '../../components/button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, registerSchemaType } from '@/schema/register.schema'
import { AuthContext } from '@/context/Auth.Context'
import { useContext } from 'react'
import Link from 'next/link'
import { ModalAnnouncement } from '@/components/modal/modalAnnouncement'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

    const { registerFunction } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm <registerSchemaType> ({
        mode: 'onBlur',
        resolver: zodResolver(registerSchema)
    })

    return (
        <>
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
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
            <div className='bg-gray-1000 p-10 max-w-[450px] mx-auto rounded mt-[100px] mb-[100px]'>
                <form className='w-full flex flex-col items-start' onSubmit={handleSubmit(registerFunction)}>

                    <h1 className='text-black font-bold text-[24px] leading-[30px]'>Cadastro</h1>

                    <p className='mb-7 mt-8 text-black font-medium text-[16px] leading-[17px]'>Informações pessoais</p>

                    <label id='name' className='mb-2 text-black font-medium text-[14px] leading-[17px]'>Nome</label>
                    <Input type='text' placeholder='Ex: Samuel Leão' {...register('name')}/>
                    {errors.name?.message && <p className='text-[14px] text-red-500'>{errors.name?.message}</p>}

                    <label id='email' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Email</label>
                    <Input type='email' {...register('email')} placeholder='Ex: samuel@mail.com'/>
                    {errors.email?.message && <p className='text-[14px] text-red-500'>{errors.email?.message}</p>}
                    
                    <label id='cpf' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>CPF</label>
                    <Input type='text' {...register('cpf')} placeholder='000.000.000-00'/>
                    {errors.cpf?.message && <p className='text-[14px] text-red-500'>{errors.cpf?.message}</p>}

                    <label id='phone' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Celular</label>
                    <Input type='text' {...register('phone')} placeholder='(DDD) 90099-0099'/>
                    {errors.phone?.message && <p className='text-[14px] text-red-500'>{errors.phone?.message}</p>}

                    <label id='birthDate' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Data de nascimento</label>
                    <Input type='text' {...register('birthDate')} placeholder='00/00/0000'/>
                    {errors.birthDate?.message && <p className='text-[14px] text-red-500'>{errors.birthDate?.message}</p>}

                    <label id='description' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Descrição</label>
                    <Input type='text' {...register('description')} placeholder='Digite uma descrição'/>
                    {errors.description?.message && <p className='text-[14px] text-red-500'>{errors.description?.message}</p>}

                    <p className='mb-7 mt-8 text-black font-medium text-[16px] leading-[17px]'>Informações de endereço</p>

                    <div className="flex space-x-4">
                        <div>
                            <label id='cep' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>CEP</label>
                            <Input type='number' {...register('cep')} placeholder='00000-000'/>
                            {errors.cep?.message && <p className='text-[14px] text-red-500'>{errors.cep?.message}</p>}
                        </div>
                        <div>
                            <label id='state' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Estado</label>
                            <Input type='text' {...register('state')} placeholder='Digite o seu Estado'/>
                            {errors.state?.message && <p className='text-[14px] text-red-500'>{errors.state?.message}</p>}
                        </div>
                    </div>

                    <label id='city' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Cidade</label>
                    <Input type='text' {...register('city')} placeholder='Digite a sua cidade'/>
                    {errors.city?.message && <p className='text-[14px] text-red-500'>{errors.city?.message}</p>}

                    <div className="flex space-x-4">
                        <div>
                            <label id='street' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Rua</label>
                            <Input type='text' {...register('street')} placeholder='Digite a sua rua'/>
                            {errors.street?.message && <p className='text-[14px] text-red-500'>{errors.street?.message}</p>}
                        </div>
                        <div>
                            <label id='number' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Número</label>
                            <Input type='number' {...register('number')} placeholder='Digite o número'/>
                            {errors.number?.message && <p className='text-[14px] text-red-500'>{errors.number?.message}</p>}
                        </div>
                    </div>

                    <label id='complement' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Complemento</label>
                    <Input type='text' {...register('complement')} placeholder='Ex: ap 307'/>
                    {errors.complement?.message && <p className='text-[14px] text-red-500'>{errors.complement?.message}</p>}

                    <p className='mt-8 text-black font-medium text-[16px] leading-[17px]'>Tipo de Conta</p>

                    <div className="flex w-full justify-center space-x-4">
                        <Button size='big' color='brand10' onClick={(event) => event.preventDefault()}>Comprador</Button>
                        <Button size='big' color='brand10' onClick={(event) => event.preventDefault()}>Anunciante</Button>
                    </div>

                    <label id='password' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Senha</label>
                    <Input type='password' {...register('password')} placeholder='Digite sua Senha'/>
                    {errors.password?.message && <p className='text-[14px] text-red-500'>{errors.password?.message}</p>}

                    <label id='confirmPass' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Comfirmar Senha</label>
                    <Input type='password' {...register('confirmPass')} placeholder='Digite novamente sua Senha'/>
                    {errors.confirmPass?.message && <p className='text-[14px] text-red-500'>{errors.confirmPass?.message}</p>}

                    <Button size='big' color='brand1' className='mt-8 w-full'>Finalizar Cadastro</Button>
                </form>
            </div>
        </section>
        <Footer/>
    </>
    )
}
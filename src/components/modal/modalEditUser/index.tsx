"use client";
import Image from "next/image";
import closeModal from "../../../../public/assets/close-modal.png";
import { ModalWrapper } from "..";
import { Input } from "@/components/inputs/input";
import styles from '@/components/modal/modalAnnouncement/style.module.css'
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { Api } from "@/services/Api";
import { schema, updateUserSchemaType } from "@/schema/register.schema";
import { ModalDeleteUser } from "../modalDeleteUser";
import { Seller } from "@/app/seller/[id]/page";
import { UserContext } from "@/context/User.Context";

interface StatusModelType {
    openModalUp: boolean
    setOpenModalUp: React.Dispatch<React.SetStateAction<boolean>> 
}

export const ModalUpdate = async ({ openModalUp, setOpenModalUp }: StatusModelType) => {

    const { updateUser, userId } = useContext(UserContext)

    const responseCurrentUser = await Api.get(`/users/${userId?.value}`);

    const currentUser: Seller = responseCurrentUser.data;

    const { register, handleSubmit, formState: { errors } } = useForm<updateUserSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(schema)
    })

    const [openModalDeleteUser, setOpenModalDeleteUser] = useState(false)

    const [activeButton, setActiveButton] = useState(true);

    const handleButtonClick = (value: boolean) => {
        setActiveButton(value);
    };

    const onSubmit = async (data: updateUserSchemaType) => {
        delete data.confirmPass
        if (!data.password) {
            delete data.password
        }
        const newData = { ...data, seller: activeButton };

        updateUser(newData, openModalUp, setOpenModalUp)
    }

    return (
        <ModalWrapper>
            <form className={`py-[18px] px-[24px] w-[520px] fixed h-4/5 rounded-lg overflow-y-auto bg-[#FFFFFF] my-custom-scroll ${styles["my-custom-scroll"]} `} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between items-center">
                    <h3 className="text-gray-100 font-bold text-base">
                        Editar Perfil
                    </h3>
                    <Image
                        src={closeModal}
                        alt="close modal"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                        onClick={() => setOpenModalUp(!openModalUp)}
                    />
                </div>
                <p className="text-gray-000 text-sm font-medium mt-4 mb-6">
                    Informações Pessoais
                </p>
                <div className="flex flex-col gap-6">
                    <label id='name' className='mb-2 text-black font-medium text-[14px] leading-[17px]'>Nome</label>
                    <Input type='text' defaultValue={currentUser.name} {...register('name')} />
                    {errors.name?.message && <p className='text-[14px] text-red-500'>{errors.name?.message}</p>}

                    <label id='email' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Email</label>
                    <Input type='email' defaultValue={currentUser.email} {...register('email')} placeholder='Ex: samuel@mail.com' />
                    {errors.email?.message && <p className='text-[14px] text-red-500'>{errors.email?.message}</p>}

                    <label id='cpf' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>CPF</label>
                    <Input type='text' defaultValue={currentUser.cpf} {...register('cpf')} placeholder='000.000.000-00' />
                    {errors.cpf?.message && <p className='text-[14px] text-red-500'>{errors.cpf?.message}</p>}

                    <label id='phone' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Celular</label>
                    <Input type='text' defaultValue={currentUser.phone} {...register('phone')} placeholder='(DDD) 90099-0099' />
                    {errors.phone?.message && <p className='text-[14px] text-red-500'>{errors.phone?.message}</p>}

                    <label id='birthDate' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Data de nascimento</label>
                    <Input type='text' defaultValue={currentUser.birthdate} {...register('birthDate')} placeholder='00/00/0000' />
                    {errors.birthDate?.message && <p className='text-[14px] text-red-500'>{errors.birthDate?.message}</p>}

                    <label id='description' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Descrição</label>
                    <Input type='text' defaultValue={currentUser.description ? currentUser.description : ""} {...register('description')} placeholder='Digite uma descrição' />
                    {errors.description?.message && <p className='text-[14px] text-red-500'>{errors.description?.message}</p>}

                    <p className='mt-8 text-black font-medium text-[16px] leading-[17px]'>Tipo de Conta</p>

                    <div className="flex w-full justify-center space-x-4 ">
                        <button
                            className={`mt-8 w-full py-[8px] px-[18px] rounded border-[1.5px] font-semibold text-base transition duration-200 ease-in-out text-center ${activeButton === false ? 'bg-[#4529E6] border-[#4529E6] text-[#FFFFFF] hover:bg-[#5126EA] hover:border-[#5126EA]' : 'bg-[#DEE2E6] border-[#DEE2E6] text-[#495057] hover:bg-[#CED4DA] hover:border-[#CED4DA]'}`}
                            type="button"
                            onClick={() => handleButtonClick(false)}
                        >Comprador</button>
                        <button
                            className={`mt-8 w-full py-[8px] px-[18px] rounded border-[1.5px] font-semibold text-base transition duration-200 ease-in-out text-center ${activeButton === false ? 'bg-[#DEE2E6] border-[#DEE2E6] text-[#495057] hover:bg-[#CED4DA] hover:border-[#CED4DA]' : 'bg-[#4529E6] border-[#4529E6] text-[#FFFFFF] hover:bg-[#5126EA] hover:border-[#5126EA]'}`}
                            type="button"
                            onClick={() => handleButtonClick(true)}
                        >Vendedor</button>
                    </div>

                    <label id='password' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Senha</label>
                    <Input type='password' {...register('password')} placeholder='Digite sua Senha' />
                    {errors.password?.message && <p className='text-[14px] text-red-500'>{errors.password?.message}</p>}

                    <label id='confirmPass' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Comfirmar Senha</label>
                    <Input type='password' defaultValue={"Neymarjr1110"} {...register('confirmPass')} placeholder='Digite novamente sua Senha' />
                    {errors.confirmPass?.message && <p className='text-[14px] text-red-500'>{errors.confirmPass?.message}</p>}

                    <div className="flex w-full justify-center space-x-4 ">
                        <Button size='medium' color='grey6' className='mt-8 w-full' type='button' onClick={() => setOpenModalUp(!openModalUp)}>Cancelar</Button>
                        <Button size='medium' color='alert' className='mt-8 w-full' type='button' onClick={() => setOpenModalDeleteUser(!openModalDeleteUser)}>Excluir Perfil</Button>
                        <Button size='medium' color='brand1' className='mt-8 w-full' type='submit'>Salvar Atualização</Button>
                    </div>

                </div>
            </form>
            {
                openModalDeleteUser && <ModalDeleteUser setOpenModalUp={setOpenModalUp} openModalUp={openModalUp} setOpenModalDeleteUser={setOpenModalDeleteUser} openModalDeleteUser={openModalDeleteUser} userId={userId} />
            }
        </ModalWrapper>
    );
};

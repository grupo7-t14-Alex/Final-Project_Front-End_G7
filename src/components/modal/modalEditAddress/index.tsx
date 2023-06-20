"use client";
import Image from "next/image";
import closeModal from "../../../../public/assets/close-modal.png";
import { ModalWrapper } from "..";
import { Input } from "@/components/inputs/input";
import styles from '@/components/modal/modalAnnouncement/style.module.css'
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Api } from "@/services/Api";
import { schemaAddress, updateUserAddressSchemaType } from "@/schema/register.schema";
import { cookies } from "next/dist/client/components/headers";
import { toast } from "react-toastify";


interface StatusModelType {
    openModalUpAdrress: boolean
    setOpenModalUpAddress: React.Dispatch<React.SetStateAction<boolean>>
}

interface UserAddress {
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement: string
}

export const ModalUpAddress = async ({ openModalUpAdrress, setOpenModalUpAddress }: StatusModelType) => {
    const cookiesStore = cookies();
    const userId = cookiesStore.get("@id");

    const responseCurrentUser = await Api.get(`/users/${userId?.value}`);

    const currentUserAddress: UserAddress = responseCurrentUser.data.address;
    const addressId: string = responseCurrentUser.data.address.id

    const { register, handleSubmit, formState: { errors } } = useForm<updateUserAddressSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(schemaAddress)
    })

    const onSubmit = async (data: updateUserAddressSchemaType) => {
        try {

            await Api.patch(`/addresses/${addressId}`, data);

            toast.success("Usuario Atualizado com Sucesso!");
            setTimeout(() => {
                setOpenModalUpAddress(!openModalUpAdrress)
            }, 2000);
        } catch (error) {
            toast.error("Algo deu errado ao salvar alterações!");
        }
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
                        onClick={() => setOpenModalUpAddress(!openModalUpAdrress)}
                    />
                </div>

                <p className='mb-7 mt-8 text-black font-medium text-[16px] leading-[17px]'>Informações de endereço</p>

                <div className="flex flex-col gap-6">

                    <div className="flex space-x-4">
                        <div>
                            <label id='cep' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>CEP</label>
                            <Input type='number' defaultValue={currentUserAddress.cep} {...register('cep')} placeholder='00000-000' />
                            {errors.cep?.message && <p className='text-[14px] text-red-500'>{errors.cep?.message}</p>}
                        </div>
                        <div>
                            <label id='state' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Estado</label>
                            <Input type='text' defaultValue={currentUserAddress.state} {...register('state')} placeholder='Digite o seu Estado' />
                            {errors.state?.message && <p className='text-[14px] text-red-500'>{errors.state?.message}</p>}
                        </div>
                    </div>

                    <label id='city' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Cidade</label>
                    <Input type='text' defaultValue={currentUserAddress.city} {...register('city')} placeholder='Digite a sua cidade' />
                    {errors.city?.message && <p className='text-[14px] text-red-500'>{errors.city?.message}</p>}

                    <div className="flex space-x-4">
                        <div>
                            <label id='street' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Rua</label>
                            <Input type='text' defaultValue={currentUserAddress.street} {...register('street')} placeholder='Digite a sua rua' />
                            {errors.street?.message && <p className='text-[14px] text-red-500'>{errors.street?.message}</p>}
                        </div>
                        <div>
                            <label id='number' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Número</label>
                            <Input type='number' defaultValue={currentUserAddress.number} {...register('number')} placeholder='Digite o número' />
                            {errors.number?.message && <p className='text-[14px] text-red-500'>{errors.number?.message}</p>}
                        </div>
                    </div>

                    <label id='complement' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Complemento</label>
                    <Input type='text' defaultValue={currentUserAddress.complement} {...register('complement')} placeholder='Ex: ap 307' />
                    {errors.complement?.message && <p className='text-[14px] text-red-500'>{errors.complement?.message}</p>}

                    <div className="flex w-full justify-center space-x-4 ">
                        <Button size='medium' color='grey6' className='mt-8 w-full' type='button' onClick={() => setOpenModalUpAddress(!openModalUpAdrress)}>Cancelar</Button>
                        <Button size='medium' color='brand1' className='mt-8 w-full' type='submit'>Salvar Atualização</Button>
                    </div>

                </div>
            </form>
        </ModalWrapper>
    );
};

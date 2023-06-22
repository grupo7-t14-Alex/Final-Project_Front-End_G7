"use client";
import Image from "next/image";
import closeModal from "../../../../public/assets/close-modal.png";
import { ModalWrapper } from "..";
import styles from '@/components/modal/modalAnnouncement/style.module.css'
import { Button } from "@/components/button";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useContext } from "react";
import { UserContext } from "@/context/User.Context";

interface StatusModelType {
    userId: RequestCookie | undefined
    openModalDeleteUser: boolean
    setOpenModalDeleteUser: React.Dispatch<React.SetStateAction<boolean>>
    openModalUp: boolean
    setOpenModalUp: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalDeleteUser = ({ userId, openModalUp, setOpenModalUp, openModalDeleteUser, setOpenModalDeleteUser }: StatusModelType) => {
    const { deleteUser } = useContext(UserContext)

    const onSubmit = async () => {
        deleteUser(userId, openModalUp, setOpenModalUp, openModalDeleteUser, setOpenModalDeleteUser)
    }

    return (
        <ModalWrapper>
            <div className={`py-[18px] px-[24px] w-[520px] fixed h-1/2 rounded-lg overflow-y-auto bg-[#FFFFFF] my-custom-scroll ${styles["my-custom-scroll"]} `} >
                <div className="flex justify-between items-center">
                    <h3 className="text-gray-100 font-bold text-base">
                        Excluir Perfil
                    </h3>
                    <Image
                        src={closeModal}
                        alt="close modal"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                        onClick={() => setOpenModalDeleteUser(!openModalDeleteUser)}
                    />
                </div>

                <p className='mb-7 mt-8 text-black font-medium text-[16px] leading-[17px]'>Tem certeza que deseja deletar esse Perfil ?</p>

                <div className="flex flex-col gap-6">
                    <div className="flex space-x-4">
                        <p className='mb-7 mt-8 text-gray-200 font-medium text-[16px] leading-[17px]'>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nosso servidores.</p>
                    </div>

                    <div className="flex w-full justify-end space-x-4 ">
                        <Button size='medium' color='grey6' className='mt-8 w-full' type='button' onClick={() => setOpenModalDeleteUser(!openModalDeleteUser)} >Cancelar</Button>
                        <Button size='medium' color='alert' className='mt-8 w-full' type='submit'>Excluir conta</Button>
                    </div>

                </div>
            </div>
        </ModalWrapper>
    );
};
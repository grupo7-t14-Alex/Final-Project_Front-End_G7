"use client";
import Image from "next/image";
import closeModal from "../../../../public/assets/close-modal.png";
import { ModalWrapper } from "..";
import styles from '@/components/modal/modalAnnouncement/style.module.css'
import { Button } from "@/components/button";
import { useContext } from "react";
import { AuthContext } from "@/context/Auth.Context";
import { Api } from "@/services/Api";
import { toast } from "react-toastify";
import { carsContext } from "@/context/Cars.Context";


const ModalDeleteCar = (carId: any) => {
    const { token } = useContext(AuthContext);
    const { openModalDelCars, setOpenModalDelCars, openModalUpCars, setOpenModalUpCars } = useContext(carsContext);


    const onSubmit = async () => {
        try {
            await Api.delete(`/cars/${carId.carId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success("Anúncio deletado com Sucesso!");
            setTimeout(() => {
                setOpenModalDelCars(!openModalDelCars)
                setOpenModalUpCars(!openModalUpCars)
            }, 2000);
        } catch (error) {
            console.log(error)
            toast.error("Algo deu errado ao deletar anúncio!");
        }
    }

    return (
        <ModalWrapper>
            <div className={`py-[18px] px-[24px] w-[520px] fixed h-1/2 rounded-lg overflow-y-auto bg-[#FFFFFF] my-custom-scroll ${styles["my-custom-scroll"]} `} >
                <div className="flex justify-between items-center">
                    <h3 className="text-gray-100 font-bold text-base">
                        Excluir Anúncio
                    </h3>
                    <Image
                        src={closeModal}
                        alt="close modal"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                        onClick={() => setOpenModalDelCars(!openModalDelCars)}
                    />
                </div>

                <p className='mb-7 mt-8 text-black font-medium text-[16px] leading-[17px]'>Tem certeza que deseja deletar esse Anúncio ?</p>

                <div className="flex flex-col gap-6">
                    <div className="flex space-x-4">
                        <p className='mb-7 mt-8 text-gray-200 font-medium text-[16px] leading-[17px]'>Essa ação não pode ser desfeita. Isso excluirá permanentemente seu anúncio e removerá seus dados de nosso servidores.</p>
                    </div>

                    <div className="flex w-full justify-end space-x-4 ">
                        <Button size='medium' color='grey6' className='mt-8 w-full' type='button' onClick={() => setOpenModalDelCars(!openModalDelCars)} >Cancelar</Button>
                        <Button size='medium' color='alert' className='mt-8 w-full' type='submit' onClick={() => onSubmit()}>Excluir Anúncio</Button>
                    </div>

                </div>
            </div>
        </ModalWrapper>
    );
};

export default ModalDeleteCar
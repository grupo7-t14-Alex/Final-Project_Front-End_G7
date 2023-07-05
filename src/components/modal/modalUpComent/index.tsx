'use client';


import { useContext, useState } from 'react';
import { ModalWrapper } from '..';
import Image from "next/image";
import closeModal from "../../../../public/assets/close-modal.png";
import { AuthContext } from '@/context/Auth.Context';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from '@/components/modal/modalAnnouncement/style.module.css'
import { Button } from '@/components/button';
import { Api } from '@/services/Api';
import { toast } from 'react-toastify';
import { CommentSchema, commentSchema } from '@/schema/createComment.schema';
import { carsContext } from '@/context/Cars.Context';

const ModalUpComent = () => {

    const { token, user } = useContext(AuthContext);
    const { openModalUpComments, setOpenModalUpComments, commentId } = useContext(carsContext);
    console.log(commentId)
    const userId: string = user.id
    const commentaryId: string = commentId[0]

    const { register, handleSubmit, formState: { errors } } = useForm<CommentSchema>({
        mode: 'onBlur',
        resolver: zodResolver(commentSchema)
    })

    const onSubmit = async (data: CommentSchema) => {
        try {
            await Api.patch(`/commentaries/${commentaryId}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            );

            toast.success("Comentário Atualizado com Sucesso!");

            setTimeout(() => {
                setOpenModalUpComments(!openModalUpComments)
            }, 2000);
        } catch (error) {
            console.log(error)
            toast.error("Algo deu errado ao salvar alterações!");
        }
    }

    return (
        <ModalWrapper>
            <form className={`py-[18px] px-[24px] w-[520px] fixed h-4/5 rounded-lg overflow-y-auto bg-[#FFFFFF] my-custom-scroll ${styles["my-custom-scroll"]}`} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between items-center">
                    <h3 className="text-gray-100 font-bold text-base">
                        Atualização de Comentário
                    </h3>
                    <Image
                        src={closeModal}
                        alt="close modal"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                        onClick={() => setOpenModalUpComments(!openModalUpComments)}
                    />
                </div>
                <p className="text-gray-000 text-sm font-medium mt-4 mb-6">
                    Comentário
                </p>
                <div className="flex flex-col gap-6">
                    <textarea
                        {...register("description")}
                        rows={4}
                        color="50"
                        className="textarea"
                        defaultValue={commentId[1]}
                    ></textarea>
                    {errors.description?.message && <p className='text-[14px] text-red-500'>{errors.description?.message}</p>}
                    <div className="flex w-full justify-center space-x-4 ">
                        <Button size='medium' color='grey6' className='mt-8 w-full' type='button' onClick={() => setOpenModalUpComments(!openModalUpComments)}>Cancelar</Button>
                        <Button size='medium' color='brand1' className='mt-8 w-full' type='submit'>Salvar Atualização</Button>
                    </div>

                </div>
            </form>
        </ModalWrapper>
    );
};

export default ModalUpComent;
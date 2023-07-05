'use client';


import { useContext, useState } from 'react';
import { ModalWrapper } from '..';
import Image from "next/image";
import closeModal from "../../../../public/assets/close-modal.png";
import { AuthContext } from '@/context/Auth.Context';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from '@/components/modal/modalAnnouncement/style.module.css'
import { Input } from '@/components/inputs/input';
import { Button } from '@/components/button';
import { Api } from '@/services/Api';
import { toast } from 'react-toastify';
import { carsContext } from '@/context/Cars.Context';
import { updateCarSchema, updateCarSchemaType } from '@/schema/createCar.schema';
import { TextArea } from '@/components/inputs/textArea';
import ModalDeleteCar from '../modalDelCar';


const ModalUpCars = () => {
    const { token, user } = useContext(AuthContext);
    const { openModalUpCars, setOpenModalUpCars, carId, setOpenModalDelCars, openModalDelCars } = useContext(carsContext);

    const listCars = user.cars
    const filterCar = listCars.filter((car: any) => car.id == carId)
    const currentCar = filterCar[0]
    const currentCarId: string = currentCar.id
    const { register, handleSubmit, formState: { errors } } = useForm<updateCarSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(updateCarSchema)
    })

    const [isNumberMilageUp, setIsNumberMilageUp] = useState(true);
    const [isNumberYear, setIsNumberYear] = useState(true);

    const [activeButton, setActiveButton] = useState<boolean>(currentCar.published);

    const handleButtonClick = (value: boolean) => {
        setActiveButton(value);
    };

    const onSubmit = async (data: updateCarSchemaType) => {
        console.log(data)
        if (isNaN(Number(data.milage))) {
            setIsNumberMilageUp(false);
        }

        if (isNaN(Number(data.year))) {
            setIsNumberYear(false);
        }

        if (
            !isNaN(Number(data.milage)) &&
            !isNaN(Number(data.year))
        ) {
            try {
                setIsNumberMilageUp(true);
                setIsNumberYear(true);

                data.milage = Math.round(Number(data.milage));
                data.year = Math.round(Number(data.year));

                const gallery = [data.image1, data.image2];
                data.gallery = gallery;

                delete data.image1;
                delete data.image2;

                const newData = { ...data, published: activeButton }
                Api.defaults.headers.common.Authorization = `Bearer ${token}`;
                await Api.patch(`/cars/${currentCar.id}`, newData);
                toast.success("Anúncio alterado com Sucesso!");
                setTimeout(() => {
                    setOpenModalUpCars(!openModalUpCars)
                }, 2000);
                window.location.reload();
            } catch (error) {
                console.log(error)
                toast.error("Algo deu errado ao salvar alterações!");
            }
        }
    }

    return (
        <ModalWrapper>
            <form className={`py-[18px] px-[24px] w-[520px] fixed h-4/5 rounded-lg overflow-y-auto bg-[#FFFFFF] my-custom-scroll ${styles["my-custom-scroll"]}`} onSubmit={handleSubmit(onSubmit)}>
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
                        onClick={() => setOpenModalUpCars(!openModalUpCars)}
                    />
                </div>
                <p className="text-gray-000 text-sm font-medium mt-4 mb-6">
                    Informações Do Veiculo
                </p>
                <div className="flex flex-col gap-6">
                    <label id='model' className='mb-2 text-black font-medium text-[14px] leading-[17px]'>Marca</label>
                    <Input type='text' value={currentCar.model} {...register("model")} readOnly />

                    <label id='brand' className='mb-2 mt-8 text-black font-medium text-[14px] leading-[17px]'>Modelo</label>
                    <Input type='text' value={currentCar.brand} {...register("brand")} readOnly />

                    <div className="w-full flex gap-3.5">
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Ano"
                                value={currentCar.year}
                                {...register("year")}
                                readOnly
                            />
                        </div>
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Combustível"
                                value={currentCar.fuel}
                                {...register("fuel")}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="w-full flex gap-3.5">
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Quilometragem"
                                defaultValue={currentCar.milage}
                                {...register("milage")}
                            />
                            {errors.milage?.message && (
                                <p className="text-[14px] text-red-500">
                                    {errors.milage.message}
                                </p>
                            )}
                            {!isNumberMilageUp && (
                                <p className="text-[14px] text-red-500">Insira um número</p>
                            )}
                        </div>
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Cor"
                                defaultValue={currentCar.color}
                                {...register("color")}
                            />
                            {errors.color?.message && (
                                <p className="text-[14px] text-red-500">
                                    {errors.color.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex gap-3.5">
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Preço tabela FIPE"
                                placeholder="5.000,00"
                                defaultValue={
                                    currentCar.fipeTable &&
                                    currentCar.fipeTable.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })
                                }
                                {...register("fipeTable")}
                                readOnly
                            />
                        </div>
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Preço"
                                defaultValue={currentCar.price}
                                {...register("price")}
                            />
                            {errors.price?.message && (
                                <p className="text-[14px] text-red-500">
                                    {errors.price.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <TextArea
                            label="Descrição"
                            defaultValue={currentCar.description}
                            {...register("description")}
                        />
                        {errors.description?.message && (
                            <p className="text-[14px] text-red-500">
                                {errors.description.message}
                            </p>
                        )}
                    </div>
                    <label id='name' className='mb-2 text-black font-medium text-[14px] leading-[17px]'>Publicado</label>
                    <div className="flex w-full justify-center space-x-4 ">
                        <button
                            className={`mt-8 w-full py-[8px] px-[18px] rounded border-[1.5px] font-semibold text-base transition duration-200 ease-in-out text-center ${activeButton === true ? 'bg-[#4529E6] border-[#4529E6] text-[#FFFFFF] hover:bg-[#5126EA] hover:border-[#5126EA]' : 'bg-[#DEE2E6] border-[#DEE2E6] text-[#495057] hover:bg-[#CED4DA] hover:border-[#CED4DA]'}`}
                            type="button"
                            onClick={() => handleButtonClick(true)}
                        >Sim</button>
                        <button
                            className={`mt-8 w-full py-[8px] px-[18px] rounded border-[1.5px] font-semibold text-base transition duration-200 ease-in-out text-center ${activeButton === true ? 'bg-[#DEE2E6] border-[#DEE2E6] text-[#495057] hover:bg-[#CED4DA] hover:border-[#CED4DA]' : 'bg-[#4529E6] border-[#4529E6] text-[#FFFFFF] hover:bg-[#5126EA] hover:border-[#5126EA]'}`}
                            type="button"
                            onClick={() => handleButtonClick(false)}
                        >Não</button>
                    </div>
                    <div>
                        <Input
                            type="text"
                            label="Imagem da capa"
                            defaultValue={currentCar.coverPhoto}
                            {...register("coverPhoto")}
                        />
                        {errors.coverPhoto?.message && (
                            <p className="text-[14px] text-red-500">
                                {errors.coverPhoto.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <Input
                            type="text"
                            label="1º Imagem da galeria"
                            defaultValue={currentCar.gallery[0]}
                            {...register("image1")}
                        />
                        {errors.image1?.message && (
                            <p className="text-[14px] text-red-500">
                                {errors.image1.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <Input
                            type="text"
                            label="2º Imagem da galeria"
                            defaultValue={currentCar.gallery[0]}
                            {...register("image2")}
                        />
                        {errors.image2?.message && (
                            <p className="text-[14px] text-red-500">
                                {errors.image2.message}
                            </p>
                        )}
                    </div>
                    <Button className="text-sm mt-4 w-9/12" color="brand3" size="big">
                        Adicionar campo para imagem da galeria
                    </Button>
                    <div className="flex w-full justify-center space-x-4 ">
                        <Button size='medium' color='grey6' className='mt-8 w-full' type='button' onClick={() => setOpenModalUpCars(!openModalUpCars)}>Cancelar</Button>
                        <Button size='medium' color='alert' className='mt-8 w-full' type='button' onClick={() => setOpenModalDelCars(!openModalDelCars)}>Excluir Anúncio</Button>
                        <Button size='medium' color='brand1' className='mt-8 w-full' type='submit'>Salvar Atualização</Button>
                    </div>

                </div>
            </form>
            {
                openModalDelCars && <ModalDeleteCar carId={currentCarId} />
            }

        </ModalWrapper>
    );
};

export default ModalUpCars;
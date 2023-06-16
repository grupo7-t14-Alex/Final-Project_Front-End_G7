"use client";
import Image from "next/image";
import closeModal from "../../../../public/assets/close-modal.png";
import { ModalWrapper } from "..";
import { Input } from "@/components/inputs/input";
import { TextArea } from "@/components/inputs/textArea";
import styles from "./style.module.css";
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import {
    createCarSchema,
    createCarSchemaType,
} from "@/schema/createCar.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { parseCookies } from "nookies";
import { Api } from "@/services/Api";

export const ModalAnnouncement = () => {
    const [isNumberYear, setIsNumberYear] = useState(true);
    const [isNumberMilage, setIsNumberMilage] = useState(true);
    const [isNumberPrice, setIsNumberPrice] = useState(true);
    const cookies = parseCookies();
    const token = cookies["@token"];

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<createCarSchemaType>({
        mode: "onBlur",
        resolver: zodResolver(createCarSchema),
    });

    const onSubmit = async (data: createCarSchemaType) => {
        if (isNaN(Number(data.milage))) {
            setIsNumberMilage(false);
        }

        if (isNaN(Number(data.price))) {
            setIsNumberPrice(false);
        }

        if (isNaN(Number(data.year))) {
            setIsNumberYear(false);
        }

        if (
            !isNaN(Number(data.milage)) &&
            !isNaN(Number(data.price)) &&
            !isNaN(Number(data.year))
        ) {
            setIsNumberMilage(true);
            setIsNumberPrice(true);
            setIsNumberYear(true);

            data.milage = Math.round(Number(data.milage));
            data.price = Math.round(Number(data.price));
            data.year = Math.round(Number(data.year));

            const gallery = [data.image1, data.image2];
            data.gallery = gallery;

            delete data.image1;
            delete data.image2;

            Api.defaults.headers.common.Authorization = `Bearer ${token}`;
            await Api.post(`/cars`, data);
            reset();
        }
    };

    return (
        <ModalWrapper>
            <form
                className={`py-[18px] px-[24px] w-[520px] fixed h-4/5 rounded-lg overflow-y-auto bg-[#FFFFFF] my-custom-scroll ${styles["my-custom-scroll"]}`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex justify-between items-center">
                    <h3 className="text-gray-100 font-bold text-base">
                        Criar anuncio
                    </h3>
                    <Image
                        src={closeModal}
                        alt="close modal"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                </div>
                <p className="text-gray-000 text-sm font-medium mt-4 mb-6">
                    Informações do veículo
                </p>
                <div className="flex flex-col gap-6">
                    <div>
                        <Input
                            type="text"
                            label="Marca"
                            placeholder="Mercedes Benz"
                            {...register("brand")}
                        />
                        {errors.brand?.message && (
                            <p className="text-[14px] text-red-500">
                                {errors.brand.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <Input
                            type="text"
                            label="Modelo"
                            placeholder="A 200 CGI ADVANCE SEDAN"
                            {...register("model")}
                        />
                        {errors.model?.message && (
                            <p className="text-[14px] text-red-500">
                                {errors.model.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full flex gap-3.5">
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Ano"
                                placeholder="2018"
                                {...register("year")}
                            />
                            {errors.year?.message && (
                                <p className="text-[14px] text-red-500">
                                    {errors.year.message}
                                </p>
                            )}
                            {!isNumberYear && (
                                <p className="text-[14px] text-red-500">
                                    Insira um ano válido
                                </p>
                            )}
                        </div>
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Combustível"
                                placeholder="Gasolina / Etanol"
                                {...register("fuel")}
                            />
                            {errors.fuel?.message && (
                                <p className="text-[14px] text-red-500">
                                    {errors.fuel.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex gap-3.5">
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Quilometragem"
                                placeholder="30.000"
                                {...register("milage")}
                            />
                            {errors.milage?.message && (
                                <p className="text-[14px] text-red-500">
                                    {errors.milage.message}
                                </p>
                            )}
                            {!isNumberMilage && (
                                <p className="text-[14px] text-red-500">
                                    Insira um número
                                </p>
                            )}
                        </div>
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Cor"
                                placeholder="Branco"
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
                                placeholder="48.000,00"
                            />
                        </div>
                        <div className="max-w-[50%]">
                            <Input
                                type="text"
                                label="Preço"
                                placeholder="R$ 50.000,00"
                                {...register("price")}
                            />
                            {errors.price?.message && (
                                <p className="text-[14px] text-red-500">
                                    {errors.price.message}
                                </p>
                            )}
                            {!isNumberPrice && (
                                <p className="text-[14px] text-red-500">
                                    Preencha um número
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <TextArea
                            label="Descrição"
                            placeholder="Digite a descrição..."
                            {...register("description")}
                        />
                        {errors.description?.message && (
                            <p className="text-[14px] text-red-500">
                                {errors.description.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <Input
                            type="text"
                            label="Imagem da capa"
                            placeholder="https://image.com"
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
                            placeholder="https://image.com"
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
                            placeholder="https://image.com"
                            {...register("image2")}
                        />
                        {errors.image2?.message && (
                            <p className="text-[14px] text-red-500">
                                {errors.image2.message}
                            </p>
                        )}
                    </div>
                </div>
                <Button
                    className="text-sm mt-4 w-9/12"
                    color="brand3"
                    size="big"
                >
                    Adicionar campo para imagem da galeria
                </Button>
                <div className="mt-[50px] flex justify-end gap-x-2.5">
                    <Button className="max-w-max" color="grey6" size="big">
                        Cancelar
                    </Button>
                    <Button className="max-w-max" color="brand1" size="big" type="submit">
                        Criar anúncio
                    </Button>
                </div>
            </form>
        </ModalWrapper>
    );
};

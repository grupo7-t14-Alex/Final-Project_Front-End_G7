import Image from "next/image";
import closeModal from "../../../../public/assets/close-modal.png";
import { ModalWrapper } from "..";
import { Input } from "@/components/inputs/input";
import { TextArea } from "@/components/inputs/textArea";
import styles from "./style.module.css";
import { Button } from "@/components/button";

export const ModalAnnouncement = () => {
    
    return (
        <ModalWrapper>
            <div
                className={`py-[18px] px-[24px] w-[520px] fixed h-4/5 rounded-lg overflow-y-auto bg-[#FFFFFF] my-custom-scroll ${styles["my-custom-scroll"]}`}
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
                    />
                </div>
                <p className="text-gray-000 text-sm font-medium mt-4 mb-6">
                    Informações do veículo
                </p>
                <div className="flex flex-col gap-6">
                    <Input
                        type="text"
                        label="Marca"
                        placeholder="Mercedes Benz"
                    />
                    <Input
                        type="text"
                        label="Modelo"
                        placeholder="A 200 CGI ADVANCE SEDAN"
                    />
                    <div className="w-full flex gap-3.5">
                        <Input type="text" label="Ano" placeholder="2018" />
                        <Input
                            type="text"
                            label="Combustível"
                            placeholder="Gasolina / Etanol"
                        />
                    </div>
                    <div className="w-full flex gap-3.5">
                        <Input
                            type="text"
                            label="Quilometragem"
                            placeholder="2018"
                        />
                        <Input type="text" label="Cor" placeholder="Branco" />
                    </div>
                    <div className="w-full flex gap-3.5">
                        <Input
                            type="text"
                            label="Preço tabela FIPE"
                            placeholder="48.000,00"
                        />
                        <Input
                            type="text"
                            label="Preço"
                            placeholder="R$ 50.000,00"
                        />
                    </div>
                    <TextArea
                        label="Descrição"
                        placeholder="Digite a descrição..."
                    />
                    <Input
                        type="text"
                        label="Imagem da capa"
                        placeholder="https://image.com"
                    />
                    <Input
                        type="text"
                        label="1º Imagem da galeria"
                        placeholder="https://image.com"
                    />
                    <Input
                        type="text"
                        label="2º Imagem da galeria"
                        placeholder="https://image.com"
                    />
                </div>
                <Button
                    className="text-sm mt-4 w-9/12"
                    color="brand3"
                    size="big"
                >
                    Adicionar campo para imagem da galeria
                </Button>
                <div className="mt-[50px] flex justify-end gap-x-2.5">
                    <Button
                        className="max-w-max"
                        color="grey6"
                        size="big"
                    >
                        Cancelar
                    </Button>
                    <Button
                        className="max-w-max"
                        color="brandDisabled"
                        size="big"
                    >
                        Criar anúncio
                    </Button>
                </div>
            </div>
        </ModalWrapper>
    );
};

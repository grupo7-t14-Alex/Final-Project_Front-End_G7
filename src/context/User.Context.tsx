"use client";

import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/Api";
import { NextRouter } from "next/router";
import { registerSchemaType, updateUserAddressSchemaType, updateUserSchemaType } from "@/schema/register.schema";
import { useRouter } from "next/navigation";
import { parseCookies, setCookie } from "nookies";
import { cookies } from "next/dist/client/components/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Seller } from "@/app/seller/[id]/page";


export const UserContext = createContext({} as iProviderValue);

interface iUserProviderChildren {
    children: React.ReactNode;
}

interface iProviderValue {
    openModalUp: boolean;
    setOpenModalUp: (openModalUp: boolean) => void;
    token: string | undefined
    userId: string | undefined
    updateUser: (data: updateUserSchemaType) => Promise<void>
    deleteUser: (userId: RequestCookie | undefined, toggleModalStatsDel: boolean, toggleModalSetDel: React.Dispatch<React.SetStateAction<boolean>>, toggleModalStats: boolean, toggleModalSet: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
    updateAddress: (addressId: string, data: updateUserAddressSchemaType, toggleModalStatsUpAd: boolean, toggleModalSetUpAd: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
}

export const UserProvider = async ({
    children,
}: iUserProviderChildren) => {
    const cookiesStore = parseCookies();
    const userId: string | undefined = cookiesStore['@id'];
    const token: string | undefined = cookiesStore['@token']
    const [openModalUp, setOpenModalUp] = useState<boolean>(false);

   
    const updateUser = async (data: updateUserSchemaType) => {
        try {
            await Api.patch(`/users/${userId}`, data);

            toast.success("Usuario Atualizado com Sucesso!");

            setTimeout(() => {
               
            }, 2000);
        } catch (error) {
            toast.error("Algo deu errado ao salvar alterações!");
        }
    }

    const deleteUser = async (userId: RequestCookie | undefined, toggleModalStatsDel: boolean, toggleModalSetDel: React.Dispatch<React.SetStateAction<boolean>>, toggleModalStats: boolean, toggleModalSet: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            await Api.delete(`/users/${userId}`);

            toast.success("Usuario deletado com Sucesso!");
            setTimeout(() => {
                toggleModalSetDel(!toggleModalStatsDel)
                toggleModalSet(!toggleModalStats)
            }, 2000);
        } catch (error) {
            toast.error("Algo deu errado ao deletar usuário!");
        }
    }

    const updateAddress = async (addressId: string, data: updateUserAddressSchemaType, toggleModalStatsUpAd: boolean, toggleModalSetUpAd: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            await Api.patch(`/addresses/${addressId}`, data);

            toast.success("Usuario Atualizado com Sucesso!");
            setTimeout(() => {
                toggleModalSetUpAd(!toggleModalStatsUpAd)
            }, 2000);
        } catch (error) {
            toast.error("Algo deu errado ao salvar alterações!");
        }
    }

    return (
        <UserContext.Provider
            value={{
                openModalUp,
                setOpenModalUp,
                token,
                updateUser,
                userId,
                deleteUser,
                updateAddress
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
"use client";

import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Fipe } from "../services/Fipe";

export const FipeContext = createContext({} as iProviderValue);

interface iFipeProviderChildren {
    children: React.ReactNode;
}

interface iProviderValue {
    Querybrand: any
    GetFipeQuery: (brand: string) => Promise<void>
    AllCars: any
    BrandCars: string[],
    openModal: boolean;
    setOpenModel: React.Dispatch<React.SetStateAction<boolean>>
}

export const FipeProvider = ({ children }: iFipeProviderChildren) => {

    const [BrandCars, setBrandCars] = useState<string[]>([])

    const [AllCars, setAllCars] = useState<any>()

    const [Querybrand, setQuerybrand] = useState<any>()

    const GetFipe = async () => {
        try {
            const res = await Fipe.get<any>("/cars")
            setAllCars(res.data)
            const keys = Object.keys(res.data);
            setBrandCars(keys)

        } catch (error) {
            toast.error("Algo seu errado na Fipe");
        }
    };
    useEffect(()=> {
        GetFipe()
    }, []) 

    const GetFipeQuery = async (brand: any) => {
        try {
            const res = await Fipe.get<any>(`/cars?brand=${brand}`)
            setQuerybrand(res.data)

        } catch (error) {
            toast.error("Algo seu errado na Fipe");
        }
    };

    
    const [openModal, setOpenModel] = useState(false)

    return (
        <FipeContext.Provider value={{
            Querybrand,
            GetFipeQuery,
            AllCars,
            setOpenModel,
            openModal,
            BrandCars,
        }}>
            {children}
        </FipeContext.Provider>
    );
};

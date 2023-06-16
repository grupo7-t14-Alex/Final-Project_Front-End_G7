"use client";

import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Fipe } from "../services/Fipe";

export const FipeContext = createContext({} as iProviderValue);

interface iFipeProviderChildren {
    children: React.ReactNode;
}

interface iProviderValue {
}

export const FipeProvider = ({ children }: iFipeProviderChildren) => {

    const [BrandCars, setBrandCars] = useState<string[] | null>(null)

    const [AllCars, setAllCars] = useState<any>(null)

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


    return (
        <FipeContext.Provider value>
            {children}
        </FipeContext.Provider>
    );
};

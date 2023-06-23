"use client"

import { Api } from "@/services/Api";
import { CarProps } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";
import { number } from "zod";

interface ChildrenProps {
    children: ReactNode;
}

interface CarsContextProps {
    cars: CarProps[]
    filteredCars: (filter: string, key: string) => void
    setLop: (lop: boolean) => void
    lop: boolean
    setFilterModal: (filterModal: boolean) => void
    filterModal: boolean
    hiddenFilter: boolean
    setHiddenFilter: (hiddenFilter: boolean) => void
}

export const carsContext = createContext({} as CarsContextProps)


export const CarsProvider = ({children}:ChildrenProps) =>{
    const [cars, setCars ] = useState<CarProps[]>([])
    const [lop, setLop] = useState(false)
    const [filterModal , setFilterModal] = useState(false)
    const [hiddenFilter, setHiddenFilter] = useState(false)
    useEffect(()=> {
        const getCars = async () => {
            try {
                const { data } = await Api.get('/cars')
                
                setCars(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCars()
    },[lop])
   
    const filteredCars = (filter: string , key: string) => {
        
        const filteredCar = cars.filter((car) =>{
            if(key === 'year') {
                return car.year === parseInt(filter)
            }
            if(key === 'brand') {
                return car.brand == filter
            }
            if(key === 'model') {
                return car.model == filter
            }
            if(key === 'color') {
                return car.color == filter
            }
            if(key === 'fuels') {
                return car.fuel == filter
            }
            if(key === 'km') {
                return car.milage <= parseInt(filter)
            }

            if(key === 'kmMax') {
                return car.milage >= parseInt(filter)
            }
            if(key === 'price') {
                return car.price <= parseInt(filter)
            }
            if(key === 'priceMax') {
                return car.price >= parseInt(filter)
            }

        })

        if(filteredCar.length >= 1){
            setHiddenFilter(true)
            setCars(filteredCar)
        }
    }
    return(
        <carsContext.Provider value={{cars, filteredCars, setLop, lop, filterModal, setFilterModal, hiddenFilter, setHiddenFilter}}>
            {children}
        </carsContext.Provider>
    )
}

"use client"
import { Api } from "@/services/Api";
import { CarProps, CommentsData } from "@/types";
import { parseCookies } from "nookies";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { number } from "zod";

interface ChildrenProps {
    children: ReactNode;
}
interface CarsContextProps {
    CarDetails: any,
    cars: CarProps[]
    filteredCars: (filter: string, key: string) => void
    setLop: (lop: boolean) => void
    lop: boolean
    setFilterModal: (filterModal: boolean) => void
    filterModal: boolean
    hiddenFilter: boolean
    setHiddenFilter: (hiddenFilter: boolean) => void
    openModalUpCars: boolean
    setOpenModalUpCars: React.Dispatch<React.SetStateAction<boolean>>;
    openModalDelCars: boolean
    setOpenModalDelCars: React.Dispatch<React.SetStateAction<boolean>>;
    openModalUpComments: boolean
    setOpenModalUpComments: React.Dispatch<React.SetStateAction<boolean>>;
    commentId: string[]
    setCommentId: Dispatch<SetStateAction<string[]>>
    carId: string | undefined
    setCarId: Dispatch<SetStateAction<string | undefined>>
    getCarDetails: (id: string) => Promise<void>
    deleteComment: (id: string) => Promise<void>
}

export const carsContext = createContext({} as CarsContextProps)

export const CarsProvider = ({ children }: ChildrenProps) => {
    const [cars, setCars] = useState<CarProps[]>([])
    const cookies = parseCookies()
    const token = cookies["@token"];

    const [lop, setLop] = useState(false)
    const [filterModal, setFilterModal] = useState(false)
    const [hiddenFilter, setHiddenFilter] = useState(false)
    const [openModalUpCars, setOpenModalUpCars] = useState<boolean>(false);
    const [openModalDelCars, setOpenModalDelCars] = useState<boolean>(false);
    const [openModalUpComments, setOpenModalUpComments] = useState<boolean>(false);
    const [commentId, setCommentId] = useState<string[]>([]);
    const [carId, setCarId] = useState<string>();


    useEffect(() => {
        const getCars = async () => {
            try {
                const { data } = await Api.get('/cars')
                setCars(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCars()
    }, [lop])


    const filteredCars = (filter: string, key: string) => {
        const filteredCar = cars.filter((car) => {
            if (key === 'year') {
                return car.year === parseInt(filter)
            }
            if (key === 'brand') {
                return car.brand == filter
            }
            if (key === 'model') {
                return car.model == filter
            }
            if (key === 'color') {
                return car.color == filter
            }

            if (key === 'fuel') {

                return car.fuel == filter
            }
            if (key === 'km') {
                return car.milage <= parseInt(filter)
            }
            if (key === 'kmMax') {
                return car.milage >= parseInt(filter)
            }
            if (key === 'price') {
                return car.price <= parseInt(filter)
            }
            if (key === 'priceMax') {
                return car.price >= parseInt(filter)
            }
        })

        if (filteredCar.length >= 1) {
            setHiddenFilter(true)
            setCars(filteredCar)
        }
    }

    const [CarDetails, setCarDetails] = useState<any>()
    const getCarDetails = async (id: string) => {
        try {
            const { data } = await Api.get<CarProps>(`/cars/${id}`)
            setCarDetails(data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteComment = async (id: string) => {
        try {
            await Api.delete(`/commentaries/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <carsContext.Provider value={{
            CarDetails,
            cars,
            filteredCars,
            setLop,
            lop,
            setOpenModalUpCars,
            carId,
            setCarId,
            openModalDelCars,
            setOpenModalDelCars,
            filterModal,
            setFilterModal,
            hiddenFilter,
            setHiddenFilter,
            getCarDetails,
            openModalUpCars,
            deleteComment,
            openModalUpComments,
            setOpenModalUpComments,
            commentId,
            setCommentId
        }}>

            {children}
        </carsContext.Provider>
    )
}
"use client"

import { useContext, useEffect } from "react"
import CardCar from "./CardCar"
import { carsContext } from "@/context/Cars.Context"



const CardCars = () => {
    const {cars, setLop, lop} = useContext(carsContext)

    useEffect(()=>{

    },[cars])
 
    return(
       <>
         <button onClick={()=> setLop(!lop)}>limpar filtro</button>
         <ul className="flex flex-row overflow-auto gap-14  md:grid grid-cols-2 lg:grid-cols-3 lg:overflow-visible gap-15 p-4">
            {cars.map((car) => (
                <CardCar key={car.id} car={car} />
            ))}
         </ul>
       </>
    )
}

export default CardCars
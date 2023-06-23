"use client"

import { useContext, useEffect } from "react"
import CardCar from "./CardCar"
import { carsContext } from "@/context/Cars.Context"



const CardCars = () => {
    const {cars, setLop, lop, hiddenFilter, setHiddenFilter} = useContext(carsContext)

    useEffect(()=>{

    },[cars])
 
    return(
       <>
         {hiddenFilter && <button onClick={()=> {setLop(!lop); setHiddenFilter(false)}} className="w-40 h-12 rounded bg-brand-2 text-white">limpar filtro</button>}
         <ul className="w-full lg:w-full flex flex-row gap-14  lg:flex-wrap gap-15 p-4">
            {cars.map((car) => (
                <CardCar key={car.id} car={car} />
            ))}
         </ul>
       </>
    )
}

export default CardCars
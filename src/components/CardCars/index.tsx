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
         <ul className="w-full flex flex-col lg:flex-row lg:flex-wrap p-4 gap-5">
            {cars.map((car) => (
                <CardCar key={car.id} car={car} />
            ))}
         </ul>
       </>
    )
}

export default CardCars
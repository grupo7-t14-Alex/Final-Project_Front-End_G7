"use client"

import { brands, fuels, models, years } from "@/utils"
import { useContext } from "react"
import { carsContext } from "@/context/Cars.Context"


const ModalFilter = () => {
    const {filteredCars, setFilterModal} = useContext(carsContext)

    return(
        <div className="lg:hidden bg-white w-full h-96 flex overflow-x-auto fixed bottom-[-46px] flex-col">
         <div className="w-full flex justify-between items-center p-4">
             <h4>Filtro</h4>
             <button className=" ml-[496px]" onClick={()=>setFilterModal(false)}>X</button>
         </div>
         <div className="flex gap-5 p-2">
             <div className="flex flex-col gap-3">
             <h2 className="font-lexend text-2xl font-semibold">Marca</h2>
             {brands.map((brand) =>(
                 <button  onClick={()=> filteredCars(brand, 'brand')} key={brand} className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer">{brand}</button>
             ))}
             </div>
             <div className="flex flex-col gap-3">
             <h2 className="font-lexend text-2xl font-semibold">Modelo</h2>
             {models.map((model) => (
                 <button onClick={()=> filteredCars(model, 'model')} key={model} className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer">{model}</button>
             ))}
             </div>
             <div className="flex flex-col gap-3">
             <h2 className="font-lexend text-2xl font-semibold">Ano</h2>
             {years.map((year) => (
                 <button onClick={()=> filteredCars(year, 'year')} key={year} className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer">{year}</button>
             ))}
             </div>
             <div className="flex flex-col gap-3">
             <h2 className="font-lexend text-2xl font-semibold">Combustível</h2>
             {fuels.map((fuel) =>(
                 <button onClick={()=> filteredCars(fuel, 'fuel')} key={fuel} className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer">{fuel}</button>
             ))}
             </div>
             <div className="flex flex-col gap-3">
             <label  className="font-lexend text-2xl font-semibold">KM</label>
             <div className="grid grid-cols-2 gap-2" >
                 <input type="number" id="km-min" name="km-min" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Minimo" />
                 <input type="number" id="km-max" name="km-max" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Máximo" />
             </div>
             </div>
             <div className="flex flex-col gap-3">
             <label  className="font-lexend text-2xl font-semibold">Preço</label>
             <div className="flex flex-col gap-3" >
                 <input type="number" id="price-min" name="price-min" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Minimo" />
                 <input type="number" id="price-max" name="price-max" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Máximo" />
             </div>
             </div>
         </div>
     </div>
    )
}

export default ModalFilter
"use client"
import { carsContext } from "@/context/Cars.Context"
import { brands, fuels, models, years } from "@/utils"
import { useContext } from "react"


const Filter = () => {
    const {filteredCars} = useContext(carsContext)

    return(
        <aside className="flex flex-col w-28.125 gap-2 p-1">
          {/* <h3 className="font-lexend text-base font-medium" >Filtro</h3> */}
          <div className="hidden lg:flex flex-col  gap-4 p-2">
            <div className="grid grid-rows-11">
              <h2 className="font-lexend text-2xl font-semibold">Marca</h2>
              {brands.map((brand) =>(
                <button  onClick={()=> filteredCars(brand, 'brand')} key={brand} className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer">{brand}</button>
              ))}
            </div>
            <div className="grid grid-rows-11">
              <h2 className="font-lexend text-2xl font-semibold">Modelo</h2>
              {models.map((model) => (
                <button onClick={()=> filteredCars(model, 'model')} key={model} className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer">{model}</button>
              ))}
            </div>
            <div className="grid grid-rows-7">
              <h2 className="font-lexend text-2xl font-semibold">Ano</h2>
              {years.map((year) => (
                <button onClick={()=> filteredCars(year, 'year')} key={year} className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer">{year}</button>
              ))}
            </div>
            <div className="grid grid-rows-4">
              <h2 className="font-lexend text-2xl font-semibold">Combustível</h2>
              {fuels.map((fuel) =>(
                <button onClick={()=> filteredCars(fuel, 'fuel')} key={fuel} className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer">{fuel}</button>
              ))}
            </div>
            <div className="grid grid-rows-2">
              <label  className="font-lexend text-2xl font-semibold">KM</label>
              <div className="grid grid-cols-2 gap-2" >
                <input type="number" id="km-min" name="km-min" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Minimo" />
                <input type="number" id="km-max" name="km-max" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Máximo" />
              </div>
            </div>
            <div className="grid grid-rows-2">
              <label  className="font-lexend text-2xl font-semibold">Preço</label>
              <div className="grid grid-cols-2 gap-2" >
                <input type="number" id="price-min" name="price-min" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Minimo" />
                <input type="number" id="price-max" name="price-max" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Máximo" />
              </div>
            </div>
           
          </div>
        </aside>
    )
}

export default Filter
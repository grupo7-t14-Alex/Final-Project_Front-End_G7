'use client';

import { brands, fuels, models, years } from '@/utils';
import { useContext } from 'react';
import { carsContext } from '@/context/Cars.Context';

const ModalFilter = () => {
  const { filteredCars, setFilterModal, cars } = useContext(carsContext);

  return (
    <div className='lg:hidden bg-white w-full h-96 flex overflow-x-auto fixed bottom-[-83px] flex-col'>
      <div className='w-full flex justify-between items-center p-4'>
        <h4>Filtro</h4>
        <button className=' ml-[430px]' onClick={() => setFilterModal(false)}>
          X
        </button>
      </div>
      <div className='flex gap-5 p-2'>
        <div className='flex flex-col gap-3'>
          <h2 className='font-lexend text-2xl font-semibold'>Marca</h2>
          {Array.from(new Set(cars.map((car) => car.brand))).map((brand) => (
            <button
              onClick={() => filteredCars(brand, 'brand')}
              key={brand}
              className='flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer'
            >
              {brand}
            </button>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='font-lexend text-2xl font-semibold'>Modelo</h2>
          {Array.from(new Set(cars.map((car) => car.model))).map((model) => (
            <button
              onClick={() => filteredCars(model, 'model')}
              key={model}
              className='flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer'
            >
              {model}
            </button>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='font-lexend text-2xl font-semibold'>Ano</h2>
          {Array.from(new Set(cars.map((car) => car.year))).map((year) => (
            <button
              onClick={() => filteredCars(String(year), 'year')}
              key={year}
              className='flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer'
            >
              {year}
            </button>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='font-lexend text-2xl font-semibold'>Combustível</h2>
          {Array.from(new Set(cars.map((car) => car.fuel))).map((fuel) => (
            <button
              onClick={() => filteredCars(fuel, 'fuel')}
              key={fuel}
              className='flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer'
            >
              {fuel}
            </button>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-3'>
            <h2 className='font-lexend text-2xl font-semibold'>KM</h2>
            <div className='flex flex-col gap-4'>
              <button
                onClick={() => filteredCars('20000', 'km')}
                className=' w-full h-9 border-none bg-gray-500 rounded-md text-gray-300'
              >
                Minimo
              </button>
              <button
                onClick={() => filteredCars('60000', 'kmMax')}
                className='w-full h-9 border-none bg-gray-500 rounded-md text-gray-300'
              >
                Maximo
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='font-lexend text-2xl font-semibold'>Preço</h2>
            <div className='flex flex-col gap-4'>
              <button
                onClick={() => filteredCars('69900', 'price')}
                className=' w-full h-9 border-none bg-gray-500 rounded-md text-gray-300'
              >
                Minimo
              </button>
              <button
                onClick={() => filteredCars('1200000', 'priceMax')}
                className='w-full h-9 border-none bg-gray-500 rounded-md text-gray-300'
              >
                Maximo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilter;

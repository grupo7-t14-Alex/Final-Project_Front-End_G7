"use client"

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link'
import Filter from '@/components/Filter';
import CardCars from '@/components/CardCars';
import ModalFilter from '@/components/ModalFilter';
import { useContext } from 'react';
import { carsContext } from '@/context/Cars.Context';



export default function Home() {
  const {filterModal, setFilterModal} = useContext(carsContext)
  return (
    <>
    <main className="container mx-auto">
      <Header>
        <Link href={'/login'} className='text-[#4529E6] text-center font-bold hover:text-[#5126EA] hover:scale-105 mr-12'>Fazer Login</Link>
        <Link href={'/register'}   className='bg-transparent hover:scale-105 font-bold border border-[#ADB5BD] inline-block px-4 py-2 rounded hover:bg-[#ADB5BD] hover:text-white hover:border-transparent'>Cadastrar</Link>
      </Header>
      <div className="bg-gradient-to-b from-gray-300 to-gray-0 h-96 w-full relative">
        <img src="https://www.assobrav.com.br/wp-content/uploads/2020/07/porsche-911-turbo-2021-4.jpg" alt="Imagem ilustrativa carro porsche"  className="w-full h-full object-cover absolute mix-blend-overlay" />
        <div className="h-full flex flex-col justify-center gap-5">
          <h2 className="font-lexend text-4xl font-bold text-center text-gray-1000">Motors Shop</h2>
          <p className="w-full font-lexend text-3xl font-semibold text-center text-gray-1000">A melhor plataforma de anúncios de carro do país</p>
        </div>
      </div>

      <div className="grid grid-rows-1 p-1 lg:grid-cols-5">
        <Filter/>
        <div className="w-full overflow-auto p-1 md:col-span-4 flex flex-col space-y-5 lg:overflow-visible ">
            <CardCars/>
          <div className="hidden lg:flex flex-col justify-center">
            <span className="flex flex-row justify-center gap-4 line-clamp-1">1</span>
            <div className="flex flex-row justify-center space-x-6">
              <button type="button" className="py-2 px-4 bg-transparent text-purple-800 hover:text-gray-900 rounded-md">{'<'} Voltar</button>
              <button type="button" className="py-2 px-4 bg-transparent text-purple-800 hover:text-gray-900 rounded-md">Seguinte {'>'}</button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-6 my-4 md:col-span-4 lg:hidden">
          <button type="button" className="w-full py-2 px-4 text-white bg-purple-800 hover:bg-purple-900 rounded-md" onClick={()=> setFilterModal(!filterModal)}>Filtro</button>
          <div className="flex flex-col justify-center">
            <span className="flex flex-row justify-center gap-4 line-clamp-1">1</span>
            <div className="flex flex-row justify-center space-x-6">
              <button type="button" className="py-2 px-4 bg-transparent text-brand-2 hover:text-gray-100 rounded-md">{'<'} Voltar</button>
              <button type="button" className="py-2 px-4 bg-transparent text-brand-2 hover:text-gray-100 rounded-md">Seguinte {'>'}</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    {filterModal && <ModalFilter/>}
    <Footer />
    </>
  )
}

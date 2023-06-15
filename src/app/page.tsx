import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cars } from './dtaBase'
import Link from 'next/link'



export default function Home() {

  return (
    <main className="container mx-auto">
      <Header>
        <Link href={'/login'} className='text-[#4529E6] text-center font-bold hover:text-[#5126EA] hover:scale-105 mr-12'>Fazer Login</Link>
        <Link href={'/register'}   className='bg-transparent hover:scale-105 font-bold border border-[#ADB5BD] inline-block px-4 py-2 rounded hover:bg-[#ADB5BD] hover:text-white hover:border-transparent'>Cadastrar</Link>
      </Header>
      <div className="bg-gradient-to-b from-gray-300 to-gray-0 h-96 w-full relative">
        <img src="https://www.assobrav.com.br/wp-content/uploads/2020/07/porsche-911-turbo-2021-4.jpg" alt="Imagem ilustrativa carro porsche" className="w-full h-full object-cover absolute mix-blend-overlay" />
        <div className="h-full flex flex-col justify-center gap-5">
          <h2 className="font-lexend text-4xl font-bold text-center text-gray-1000">Motors Shop</h2>
          <p className="w-full font-lexend text-3xl font-semibold text-center text-gray-1000">A melhor plataforma de anúncios de carro do país</p>
        </div>
      </div>

      <div className="grid grid-rows-1 p-1 lg:grid-cols-5">
        <aside className="flex flex-col w-28.125 gap-2 p-1">
          {/* <h3 className="font-lexend text-base font-medium" >Filtro</h3> */}
          <form className="hidden lg:flex flex-col bg-brand-4 rounded-md shadow-md gap-4 p-2 line-clamp-1 break-words">
            <div className="grid grid-rows-6">
              <label htmlFor="brand" className="font-lexend text-2xl font-semibold">Marca</label>
              <input type="button" value="Porsche" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="Hyundai" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="Ford" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="Nissan" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="Honda" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="Mercedes-Benz" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="BMW" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
            </div>
            <div className="grid grid-rows-6">
              <label htmlFor="model" className="font-lexend text-2xl font-semibold">Modelo</label>
              <input type="button" value="Porsche 911" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="Porsche Panamera" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="BMW M3" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="BMW X6" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="Mercedes-Benz GLE" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="Mercedes-Benz A45" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
              <input type="button" value="Nissan GTR-R35" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" />
            </div>
            <div className="grid grid-rows-6">
              <label htmlFor="year" className="font-lexend text-2xl font-semibold">Ano</label>
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" value="2023" />
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" value="2022" />
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" value="2021" />
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" value="2020" />
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" value="2019" />
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" value="2018" />
            </div>
            <div className="grid grid-rows-4">
              <label htmlFor="year" className="font-lexend text-2xl font-semibold">Combustível</label>
              <input type="button" id="fuel" name="fuel" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" value="Diesel" />
              <input type="button" id="fuel" name="fuel" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" value="Etanol" />
              <input type="button" id="fuel" name="fuel" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" value="Gasolina" />
              <input type="button" id="fuel" name="fuel" className="flex flex-row justify-start text-gray-300 hover:text-gray-0 cursor-pointer" value="Flex" />
            </div>
            <div className="grid grid-rows-2">
              <label htmlFor="km" className="font-lexend text-2xl font-semibold">KM</label>
              <div className="grid grid-cols-2 gap-2" >
                <input type="number" id="km-min" name="km-min" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Minimo" />
                <input type="number" id="km-max" name="km-max" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Máximo" />
              </div>
            </div>
            <div className="grid grid-rows-2">
              <label htmlFor="price" className="font-lexend text-2xl font-semibold">Preço</label>
              <div className="grid grid-cols-2 gap-2" >
                <input type="number" id="price-min" name="price-min" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Minimo" />
                <input type="number" id="price-max" name="price-max" className="w-full p-2 border border-gray-300 rounded-md text-gray-300" placeholder="Máximo" />
              </div>
            </div>
            <button type="submit" className="w-full py-2 px-4 text-white bg-brand-2 hover:bg-brand-1 rounded-md">Ver anúncios</button>
          </form>
        </aside>
        <div className="w-full overflow-auto p-1 md:col-span-4 flex flex-col space-y-5 lg:overflow-visible ">
          <ul className="flex flex-row overflow-auto gap-14  md:grid grid-cols-2 lg:grid-cols-3 lg:overflow-visible gap-15 p-4">
            {
              cars.map(car =>
                <li key={car.id} className="w-19.5 max-w-xs max-h-96 border rounded-md border-transparent">
                  <figure className="bg-brand-4 px-6 py-px">
                    <img src={car.urlImage} alt="imagem carro" />
                  </figure>
                  <div className="overflow-hidden p-4 flex flex-col gap-7 max-h-full">
                    <h5 className="font-lexdend font-semibold text-base text-gray-0">{car.brand}-{car.model}</h5>
                    <p className="w-4/5 break-words font-inter font-normal text-sm text-gray-200 line-clamp-2">dadadaudadaojijiocnscnjedcnedbrbycbrncviovoirvidnvubsbsuycmascimsmuhgruihunuinsnuicniscsocsnpsuivnfvndunvudscmisocoiejfuirfnuivnsurvsnp</p>
                    <div className="flex items-center gap-2" >
                      <img src="https://rare-gallery.com/mocahbig/396683-wallpaper-satoru-gojo-jujutsu-kaisen-4k-hd.jpg" alt="profile image" className="w-8 h-8 rounded-full" />
                      <span className="break-words font-inter font-medium text-sm text-gray-200">{car.owner}</span>
                    </div>
                    <div className="w-11/12 grid grid-cols-4">
                      <span className="line-clamp-1 font-inter font-medium text-sm text-brand-2">{car.km} KM</span>
                      <span className="line-clamp-1 font-inter font-medium text-sm text-brand-2">{car.year}</span>
                      <span className="col-span-2 flex justify-center break-words font-lexend font-medium text-base text-gray-100">{car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                  </div>
                </li>
              )
            }
          </ul>
          <div className="hidden lg:flex flex-col justify-center">
            <span className="flex flex-row justify-center gap-4 line-clamp-1">1</span>
            <div className="flex flex-row justify-center space-x-6">
              <button type="button" className="py-2 px-4 bg-transparent text-purple-800 hover:text-gray-900 rounded-md">{'<'} Voltar</button>
              <button type="button" className="py-2 px-4 bg-transparent text-purple-800 hover:text-gray-900 rounded-md">Seguinte {'>'}</button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-6 my-4 md:col-span-4 lg:hidden">
          <button type="button" className="w-full py-2 px-4 text-white bg-purple-800 hover:bg-purple-900 rounded-md">Filtro</button>
          <div className="flex flex-col justify-center">
            <span className="flex flex-row justify-center gap-4 line-clamp-1">1</span>
            <div className="flex flex-row justify-center space-x-6">
              <button type="button" className="py-2 px-4 bg-transparent text-brand-2 hover:text-gray-100 rounded-md">{'<'} Voltar</button>
              <button type="button" className="py-2 px-4 bg-transparent text-brand-2 hover:text-gray-100 rounded-md">Seguinte {'>'}</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

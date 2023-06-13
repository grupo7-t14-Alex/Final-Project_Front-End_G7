import { Header } from '@/components/header';
import car from '../../img/car.png';
import minCar from '../../img/minCar.png';
import Image from 'next/image';
const CarDetails = () => {
  return (
    <>
      <header className=' h-16 border border-gray-100'>Header</header>
      <main className='gradient w-full h-screen'>
        <div className='w-full mx-auto'>
          <div className=' flex  flex-col md:flex-row '>
            <section>
              <figcaption className='w-[90%] mx-auto max-w-[750px] md:h-[355px] bg-white mt-6 rounded flex justify-center items-center'>
                <Image src={car} alt='carro' />
              </figcaption>
              <div className='w-[90%] max-w-[750px] bg-white mx-auto  md:h-60 rounded p-5 flex flex-col gap-6 mt-5'>
                <h1 className=' text-xl font-semibold '>
                  Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{' '}
                </h1>
                <div className='flex gap-4 flex-col md:flex-row md:justify-between '>
                  <div className='flex gap-3 '>
                    <span className=' bg-brand-4 text-brand-1 w-12 h-5 rounded font-semibold text-center text-sm'>
                      2013
                    </span>
                    <span className=' bg-brand-4 text-brand-1 w-12 h-5 rounded font-semibold text-center text-sm'>
                      0 KM
                    </span>
                  </div>
                  <p className=' text-base font-semibold'>R$ 00.000,00</p>
                </div>
                <button className=' w-24 h-9  border border-brand-1 bg-brand-1 text-white rounded'>
                  Comprar
                </button>
              </div>
              <div className='w-[90%] max-w-[750px] bg-white mx-auto  md:h-60 rounded p-5 flex flex-col gap-6 mt-6'>
                <h1 className=' text-gray-100 text-xl font-semibolt'>
                  Descrição
                </h1>
                <p className=' text-gray-200 text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </section>
            <section>
              <figcaption className='w-[90%] max-w-[440px] max-h-96 bg-white mx-auto mt-6 p-4 rounded'>
                <h1 className=' text-gray-100 text-xl font-semibold'>fotos</h1>
                <ul className='flex gap-3 flex-wrap mt-6 max-h-96 '>
                  <li className=' w-25 h-16 bg-gray-700 rounded flex items-center justify-center'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                  <li className=' w-24 h-16 bg-gray-700 rounded flex items-center justify-center'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                  <li className=' w-24 h-16 bg-gray-700 rounded flex items-center justify-center'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                  <li className=' w-24 h-16 bg-gray-700 rounded flex items-center justify-center'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                  <li className=' w-24 h-16 bg-gray-700 rounded flex items-center justify-center'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                  <li className=' w-24 h-16 bg-gray-700 rounded flex items-center justify-center'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                </ul>
              </figcaption>
              <div className='w-[90%] max-w-md max-h-[426px] bg-white p-8 mx-auto mt-6 rounded'>
                <div className='flex flex-col justify-center items-center gap-6'>
                  <span className=' w-20 h-20 bg-brand-1 rounded-full text-center text-white text-2xl flex justify-center items-center '>
                    SL
                  </span>
                  <h2 className=' text-xl text-gray-100 font-semibold'>
                    Samuel Leão
                  </h2>
                  <p className=' text-gray-200 text-base'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industr
                  </p>
                  <button className=' w-52 h-12 bg-gray-0 text-white rounded'>
                    Ver todos anuncios
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className='w-[90%] md:w-[57%] lg:w-[675px] bg-white rounded  flex flex-col gap-6 mt-5  mx-auto md:ml-[25.6px] lg:ml-9 md:mx-0 p-4'>
            <h1 className='text-gray-100 text-xl font-semibold'>Comentários</h1>
            <div className=' w-full max-w-[663px] h-52 gap-5 mt-4'>
              <div className='flex gap-3 items-center'>
                <span className=' w-8 h-8 bg-random-1 text-center text-white text-sm rounded-full flex justify-center items-center'>
                  JL
                </span>
                <h4 className=' text-gray-100 text-sm font-medium'>
                  Júlia Lima
                </h4>
                <span className='text-gray-300 text-xs'>há 3 dias</span>
              </div>
              <p className='text-gray-200 text-sm mt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industr standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className=' w-full max-w-[663px] h-52 gap-5 mt-4'>
              <div className='flex gap-3 items-center'>
                <span className=' w-8 h-8 bg-random-4 text-center text-white text-sm rounded-full flex justify-center items-center'>
                  MA
                </span>
                <h4 className=' text-gray-100 text-sm font-medium'>
                  Marcos Antônio
                </h4>
                <span className='text-gray-300 text-xs'>há 3 dias</span>
              </div>
              <p className='text-gray-200 text-sm mt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className=' w-full max-w-[663px] h-52 gap-5 mt-4'>
              <div className='flex gap-3 items-center'>
                <span className=' w-8 h-8 bg-random-9 text-center text-white text-sm rounded-full flex justify-center items-center'>
                  CS
                </span>
                <h4 className=' text-gray-100 text-sm font-medium'>
                  Camila Silva
                </h4>
                <span className='text-gray-300 text-xs'>há 3 dias</span>
              </div>
              <p className='text-gray-200 text-sm mt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className='w-[90%] md:w-[57%] lg:w-[675px] bg-white rounded  flex flex-col gap-6 mt-5  mx-auto md:ml-[25.6px] lg:ml-9 md:mx-0 p-4'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3 items-center'>
                <span className=' w-8 h-8 bg-random-4 text-center text-white text-sm rounded-full flex justify-center items-center'>
                  SL
                </span>
                <h4 className=' text-gray-100 text-sm font-medium'>
                  Samuel Leão
                </h4>
              </div>
              <textarea
                rows={4}
                color='50'
                className=' border border-gray-700 text-gray-300 w-full h-32 p-2'
              >
                Carro muito confortável, foi uma ótima experiência de compra...
              </textarea>
              <button className=' w-28 h-9 bg-brand-1 text-white rounded'>Comentar</button>
              <div className='flex gap-2'>
                <span className=' p-1 h-6 bg-gray-700 rounded-3xl text-gray-300 text-xs'>Gostei muito!</span>
                <span className=' p-1 h-6 bg-gray-700 rounded-3xl text-gray-300 text-xs'>Incrivel</span>
              </div>
              <span className=' p-1 h-6 max-w-[200px] bg-gray-700 rounded-3xl text-gray-300 text-xs'>Recomendarei para mes amigos!</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CarDetails;

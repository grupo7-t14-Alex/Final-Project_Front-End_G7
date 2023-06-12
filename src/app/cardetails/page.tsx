import { Header } from '@/components/header';
import car from '../../img/car.png';
import minCar from '../../img/minCar.png';
import Image from 'next/image';
const CarDetails = () => {
  return (
    <>
      <header className='h-16 border border-gray-100'>Header</header>
      <main className='gradient w-full h-screen'>
        <div className='w-[90%] mx-auto'>
          <div className='flex flex-col md:flex-row w-full'>
            <section className='md:w-[60%]'>
              <figcaption className='fig-image'>
                <Image src={car} alt='carro' />
              </figcaption>
              <div className='car-info'>
                <h1 className=' text-xl font-semibold '>
                  Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{' '}
                </h1>
                <div className='car-info-2'>
                  <div className='flex gap-3 '>
                    <span className='car-span'>
                      2013
                    </span>
                    <span className='car-span'>
                      0 KM
                    </span>
                  </div>
                  <p className='text-base font-semibold'>R$ 00.000,00</p>
                </div>
                <button className='button-buy'>
                  Comprar
                </button>
              </div>
              <div className='car-description'>
                <h1 className='text-gray-100 text-xl font-semibolt'>
                  Descrição
                </h1>
                <p className='text-gray-200 text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </section>
            <section className='md:w-[40%]'>
              <figcaption className='fig-images'>
                <h1 className=' text-gray-100 text-xl font-semibold'>fotos</h1>
                <ul className='list-cars'>
                  <li className='car-images'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                  <li className='car-images'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                  <li className='car-images'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                  <li className='car-images'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                  <li className='car-images'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                  <li className='car-images'>
                    <Image src={minCar} alt='foto de carro' />
                  </li>
                </ul>
              </figcaption>
              <div className='user-card'>
                <div className='user-card-2'>
                  <span className='user-img-profile'>
                    SL
                  </span>
                  <h2 className='text-xl text-gray-100 font-semibold'>
                    Samuel Leão
                  </h2>
                  <p className='text-gray-200 text-base'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                  </p>
                  <button className='btn-user'>
                    Ver todos anuncios
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className='box-coments'>
            <h1 className='text-gray-100 text-xl font-semibold'>Comentários</h1>
            <div className='box-coments-2'>
              <div className='flex gap-3 items-center'>
                <span className='img-user-coment'>
                  JL
                </span>
                <h4 className='text-gray-100 text-sm font-medium'>
                  Júlia Lima
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
          <div className='box-textarea'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3 items-center'>
                <span className='img-user-coment'>
                  SL
                </span>
                <h4 className=' text-gray-100 text-sm font-medium'>
                  Samuel Leão
                </h4>
              </div>
              <textarea
                rows={4}
                color='50'
                className='textarea'
              >
                Carro muito confortável, foi uma ótima experiência de compra...
              </textarea>
              <button className='btn-coments'>Comentar</button>
              <div className='flex gap-2'>
                <span className='span-textarea'>Gostei muito!</span>
                <span className='span-textarea'>Incrivel</span>
              </div>
              <span className='span-textarea max-w-[200px]'>Recomendarei para mes amigos!</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CarDetails;

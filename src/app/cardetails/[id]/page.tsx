"use client"
import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { carsContext } from "@/context/Cars.Context";
import { useRouter } from "next/navigation";
import { ProfileMenu } from "@/components/profileMenu";
import { AuthContext } from "@/context/Auth.Context";
import { Seller } from "@/app/seller/[id]/page";
import { CommentCard } from "@/components/cards/CommentsCard";

const CarDetails = async ({ params }: { params: { id: string } }) => {

  const {getCarDetails, getComments} = useContext(carsContext)

  const { token, user } = useContext(AuthContext)
  const currentUser: Seller = user;

  const comments = await getComments(params.id);

  const router = useRouter()

  const car = await getCarDetails(params.id)
  const carDetail = car

  if(!carDetail) {
    return null
  }
 
  return (
    <>
      <Header>
        {!token ?
          <>
            <Link href={'/login'} className='text-gray-200   hover:text-[#5126EA] hover:scale-105 mr-12'>Fazer Login</Link>
            <Link href={'/register'}   className='bg-transparent hover:scale-105 font-bold border border-gray-400 text-center px-4 py-2 rounded hover:bg-[#ADB5BD] hover:text-white hover:border-transparent'>Cadastrar</Link>
          </>
        :
          <div className="group w-full h-full flex items-center gap-2 relative">
            <div className="w-8 h-8 rounded-full bg-brand-1 flex items-center justify-center ">
              <h4 className="text-white font-bold text-sm">
                {currentUser.name ? currentUser.name.match(/\b(\w)/gi) : null}
              </h4>
            </div>
            <h2 className="font-medium text-sm">{currentUser.name}</h2>
            <ProfileMenu user={currentUser} />
          </div>
        }
      </Header>

      <main className="gradient w-full h-full">

        <div className="w-[90%] mx-auto">

          <div className="flex flex-col md:flex-row w-full">
            <section className="md:w-[60%]">
              <figcaption className="fig-image">
                <img src={carDetail.coverPhoto} alt="carro" />
              </figcaption>
              <div className="car-info">
                <h1 className=" text-xl font-semibold ">
                  {carDetail.brand} - {carDetail.model}
                </h1>
                <div className="car-info-2">
                  <div className="flex gap-3 ">
                    <span className="car-span">{carDetail.year}</span>
                    <span className="car-span">{carDetail.milage} KM</span>
                  </div>
                  <p className="text-base font-semibold">{carDetail.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
                <button className="button-buy">Comprar</button>
              </div>
              <div className="car-description">
                <h1 className="text-gray-100 text-xl font-semibolt">
                  Descrição
                </h1>
                <p className="text-gray-200 text-base">
                 {carDetail.description}
                </p>
              </div>
            </section>
            <section className="md:w-[40%]">
              <figcaption className="fig-images">
                <h1 className=" text-gray-100 text-xl font-semibold">fotos</h1>
                <ul className="list-cars">
                  {carDetail.gallery.map((img: any)=> (
                    <li key={img} className="car-images">
                      <img src={img} alt="foto de carro" />
                    </li>
                  ))}
                </ul>
              </figcaption>
              <div className="user-card">
                <div className="user-card-2">
                  <span className="user-img-profile">SL</span>
                  <h2 className="text-xl text-gray-100 font-semibold">
                    {carDetail.user.name}
                  </h2>
                  <p className="text-gray-200 text-base">
                    {carDetail.user.description}
                  </p>
                  <button className="btn-user" onClick={()=> router.push(`/seller/${carDetail.userId}`)}>Ver todos anuncios</button>
                </div>
              </div>
            </section>
          </div>

          <ul className="box-coments">
            <h1 className="text-gray-100 text-xl font-semibold">Comentários</h1>
            {comments!.map((comments) => {
              return <CommentCard key={comments.id} comment={comments} />;
            })}
          </ul>

          <div className="box-textarea">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="img-user-coment">SL</span>
                <h4 className=" text-gray-100 text-sm font-medium">Samuel Leão</h4>
              </div>
              <textarea rows={4} color="50" className="textarea" defaultValue={"Carro muito confortável, foi uma ótima experiência de compra..."}>
              </textarea>
              <button className="btn-coments">Comentar</button>
              <div className="flex gap-2">
                <span className="span-textarea">Gostei muito!</span>
                <span className="span-textarea">Incrivel</span>
              </div>
              <span className="span-textarea max-w-[200px]">
                Recomendarei para mes amigos!
              </span>
            </div>
          </div>

        </div>

      </main>
      
    </>
  );
};
export default CarDetails;
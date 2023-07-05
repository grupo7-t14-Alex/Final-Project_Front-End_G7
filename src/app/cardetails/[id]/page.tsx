"use client";

import { Header } from "@/components/header";

import { useContext, useEffect } from "react";
import { carsContext } from "@/context/Cars.Context";
import { useRouter } from "next/navigation";
import { ProfileMenu } from "@/components/profileMenu";
import { AuthContext } from "@/context/Auth.Context";
import { CommentCard } from "@/components/cards/CommentsCard";
import { Seller } from "@/app/seller/[id]/page";
import { CommentSchema, commentSchema } from "@/schema/createComment.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import ModalUpComent from "@/components/modal/modalUpComent";

const CarDetails = ({ params }: { params: { id: string } }) => {

  const { token, user, createComment } = useContext(AuthContext);
  
  const userData: Seller = user;

  const { getCarDetails, CarDetails, openModalUpComments } = useContext(carsContext);

  useEffect(() => {
    const fetchCarDetails = async () => {
      await getCarDetails(params.id);
    };
    fetchCarDetails();
  }, [getCarDetails, params.id]);

  const router = useRouter();

  const { register, handleSubmit } = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
  });

  const submit = (data: any) => {
    createComment(data, params.id);
  };

  if (!CarDetails) {
    return null;
  }

  return (
    <>
      <Header>
        {!token ? (
          <>
            <Link
              href={"/login"}
              className="text-gray-200   hover:text-[#5126EA] hover:scale-105 mr-12"
            >
              Fazer Login
            </Link>
            <Link
              href={"/register"}
              className="bg-transparent hover:scale-105 font-bold border border-gray-400 text-center px-4 py-2 rounded hover:bg-[#ADB5BD] hover:text-white hover:border-transparent"
            >
              Cadastrar
            </Link>
          </>
        ) : (
          <div className="group w-full h-full flex items-center gap-2 relative">
            <div className="w-8 h-8 rounded-full bg-brand-1 flex items-center justify-center ">
              <h4 className="text-white font-bold text-sm">
                {userData.name ? userData.name.match(/\b(\w)/gi) : null}
              </h4>
            </div>
            <h2 className="font-medium text-sm">{userData.name}</h2>
            <ProfileMenu user={userData} />
          </div>
        )}
      </Header>

      <main className="gradient w-full h-full">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row w-full">
            <section className="md:w-[60%]">
              <figcaption className="fig-image">
                <img src={CarDetails.coverPhoto} alt="carro" />
              </figcaption>
              <div className="car-info">
                <h1 className=" text-xl font-semibold ">
                  {CarDetails.brand} - {CarDetails.model}
                </h1>
                <div className="car-info-2">
                  <div className="flex gap-3 ">
                    <span className="car-span">{CarDetails.year}</span>
                    <span className="car-span">{CarDetails.milage} KM</span>
                  </div>
                  <p className="text-base font-semibold">
                    {CarDetails.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>

                <a className="button-buy flex items-center justify-center" href="https://api.whatsapp.com/send?phone=55981590019" target="_blank" rel="noopener noreferrer">Comprar</a>
              </div>
              <div className="car-description">
                <h1 className="text-gray-100 text-xl font-semibolt">
                  Descrição
                </h1>
                <p className="text-gray-200 text-base">
                  {CarDetails.description}
                </p>
              </div>
            </section>

            <section className="md:w-[40%]">
              <figcaption className="fig-images">
                <h1 className=" text-gray-100 text-xl font-semibold">fotos</h1>
                <ul className="list-cars">
                  {CarDetails.gallery.map((img: any) => (
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
                    {CarDetails.user.name}
                  </h2>
                  <p className="text-gray-200 text-base">
                    {CarDetails.user.description}
                  </p>
                  <button
                    className="btn-user"
                    onClick={() => router.push(`/seller/${CarDetails.userId}`)}
                  >
                    Ver todos anuncios
                  </button>
                </div>
              </div>
            </section>
          </div>

          <ul className="box-coments">
            <h1 className="text-gray-100 text-xl font-semibold">Comentários</h1>
            {CarDetails.commentaries.map((comments: any, index: any) => {
              return <CommentCard key={comments.id} comment={comments} />;
            })}
          </ul>

          {token ?
            <form className="box-textarea" onSubmit={handleSubmit(submit)}>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <span className="img-user-coment">SL</span>
                  <h4 className=" text-gray-100 text-sm font-medium">
                    {CarDetails.user.name}
                  </h4>
                </div>
                <textarea
                  {...register("description")}
                  rows={4}
                  color="50"
                  className="textarea"
                  placeholder={
                    "Carro muito confortável, foi uma ótima experiência de compra..."
                  }
                ></textarea>
                <button className="btn-coments" type="submit">
                  Comentar
                </button>
                <div className="flex gap-2">
                  <span className="span-textarea">Gostei muito!</span>
                  <span className="span-textarea">Incrivel</span>
                </div>
                <span className="span-textarea max-w-[200px]">
                  Recomendarei para mes amigos!
                </span>
              </div>
            </form>
            :
            <>
              <h1>faça o loguin para deixar um comentário</h1>
              <Link href={"/login"} className="text-gray-200 hover:text-[#5126EA] hover:scale-105 mr-12">Fazer Login</Link>
            </>
          }


        </div>
      </main>
      {
        openModalUpComments && <ModalUpComent />
      }
    </>
  );
};

export default CarDetails;

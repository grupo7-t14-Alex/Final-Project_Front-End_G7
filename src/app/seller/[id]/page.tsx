import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Api } from "@/services/Api";
import { SellerCard } from "@/components/cards/sellerCard";
import { ModalAnnouncement } from "@/components/modal/modalAnnouncement";
import { UserCard } from "@/components/cards/userCard";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/Auth.Context";
import { cookies } from "next/headers";


export interface Seller {
    id: string;
    createdAt: string;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    birthdate: string;
    description: string | null;
    seller: boolean;
    cars: Cars[];
}

interface Cars {
    id: string;
    brand: string;
    year: number;
    color: string;
    milage: number;
    model: string;
    fuel: string;
    price: string;
    description: string;
    coverPhoto: string;
    gallery: String[];
    published: boolean;
    createdAt: string;
    userId: string;
}

const SellerProfile = async ({ params }: { params: { id: string } }) => {

  const cookiesStore = cookies();
  const userId = cookiesStore.get("@id");  
  const sellerId = params.id;
  const response = await Api.get(`/users/${sellerId}`);
  const responseCurrentUser = await Api.get(`/users/${userId?.value}`);
  const currentUser: Seller = responseCurrentUser.data;
  const seller: Seller = response.data;


  return (
    <>
    
      <Header>
        <div className="w-full flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-1 flex items-center justify-center ">
            <h4 className="text-white font-bold text-sm">
              {currentUser.name.match(/\b(\w)/gi)}
            </h4>
          </div>
          <h2 className="font-medium text-sm">{currentUser.name}</h2>
        </div>
      </Header>
      <main className="gradient w-full h-max flex flex-col mx-auto items-center">
        <div className="profile-info mt-32 flex flex-col">
          <div className="w-32 h-32 rounded-full bg-brand-1 flex items-center justify-center">
            <h4 className="text-white font-bold text-xl">
              {seller.name.match(/\b(\w)/gi)}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-xl">{seller.name}</h2>
            <span className="p-1 text-brand-1 bg-brand-4 font-medium rounded">
              Anunciante
            </span>
          </div>
          <p>{seller.description}</p>
          {currentUser.seller ? (
            <Button size="medium" color="outlineBrand1" className="max-w-max" onClick={() => openModal(true)}>
              Criar Anuncio
            </Button>
          ) : null}
        </div>
        <ul className="w-[90%] h-500 my-24 flex flex-row overflow-x-auto items-center justify-start gap-8 md:flex-wrap md:h-max">
          {currentUser.id === seller.id
            ? seller.cars.map((car) => <SellerCard key={car.id} car={car} />)
            : seller.cars.map((car) => (
              car.published ? <UserCard key={car.id} car={car} seller={seller} /> : null
              ))}
        </ul>
        <span className="flex flex-row justify-center gap-4 line-clamp-1">
          1
        </span>
        <div className="flex flex-row justify-center space-x-6">
          <button
            type="button"
            className="py-2 px-4 bg-transparent text-brand-2 hover:text-gray-100 rounded-md"
          >
            {"<"} Voltar
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-transparent text-brand-2 hover:text-gray-100 rounded-md"
          >
            Seguinte {">"}
          </button>
        </div>
      </main>
      <Footer />
      
    </>
  );
};

export default SellerProfile;

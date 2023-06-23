"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SellerCard } from "@/components/cards/sellerCard";
import { UserCard } from "@/components/cards/userCard";
import UserInfos from "@/components/infoUser/infoUser";
import { ProfileMenu } from "@/components/profileMenu";
import { useContext } from "react";
import { AuthContext } from "@/context/Auth.Context";
import { ModalUpdate } from "@/components/modal/modalEditUser";
import { UserContext } from "@/context/User.Context";

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

  const { user, findSeller, protectRoutes } = useContext(AuthContext);
  const { openModalUp, setOpenModalUp } = useContext(UserContext)

  protectRoutes();

  const sellerId = params.id;
  const seller: Seller = await findSeller(sellerId);

  const currentUser: Seller = user;


  return (
    <>
      <Header>
        <div className="group w-full h-full flex items-center gap-2 relative">
          <div className="w-8 h-8 rounded-full bg-brand-1 flex items-center justify-center ">
            <h4 className="text-white font-bold text-sm">
              {currentUser.name.match(/\b(\w)/gi)}
            </h4>
          </div>
          <h2 className="font-medium text-sm">{currentUser.name}</h2>
          <ProfileMenu user={currentUser} />
        </div>
      </Header>

      <main className="gradient w-full h-max flex flex-col mx-auto items-center">
      { openModalUp && <ModalUpdate openModalUp={openModalUp} setOpenModalUp={setOpenModalUp}/>}
        <UserInfos seller={seller} sellerId={sellerId} />

        <ul className="w-[90%] h-500 my-24 flex flex-row overflow-x-auto items-center justify-start gap-8 md:flex-wrap md:h-max">
          {currentUser.id === seller.id
            ? seller.cars.map((car) => <SellerCard key={car.id} car={car} />)
            : seller.cars.map((car) =>
                car.published ? (
                  <UserCard key={car.id} car={car} seller={seller} />
                ) : null
              )}
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

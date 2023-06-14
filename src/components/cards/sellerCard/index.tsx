import { Seller } from "@/app/seller/[id]/page";
import { Button } from "@/components/button";

interface SellerCardProps {
  car: Cars;
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

export const SellerCard = ({ car }: SellerCardProps) => {
  return (
    <li
      key={car.id}
      className="relative flex flex-col w-19.5 h-430 border border-transparent rounded-md bg-gray-1000"
    >
      {car.published ? (
        <span className="absolute py-1 px-2 text-white bg-brand-1 mt-2 ml-2">
          Ativo
        </span>
      ) : (
        <span className="absolute py-1 px-2 text-white bg-gray-400 mt-2 ml-2">
          Inativo
        </span>
      )}
      <figure className="w-full h-36 p-2 bg-gray-700 flex items-center justify-center mb-6 rounded">
        <img src={car.coverPhoto} alt="Imagem de carro" className="w-full h-full" />
      </figure>
      <div className="w-full h-64 p-2 flex flex-col items-start gap-7">
        <h5 className="font-semibold text-base text-gray-0">
          {car.brand}-{car.model}
        </h5>
        <p className="text-gray-200 text-sm w-4/5 break-words">
          {car.description}
        </p>
        <div className="w-full flex flex-row gap-2 items-center">
          <span className="p-1 bg-brand-4 text-brand-1 font-medium text-sm">
            {car.milage} KM
          </span>
          <span className="p-1 bg-brand-4 text-brand-1 font-medium text-sm">
            {car.year}
          </span>
          <span className=" text-gray-0 font-bold">R$ {car.price},00</span>
        </div>
        <div className="flex flex-row gap-5">
          <Button size="medium" color="btnCard">
            Editar
          </Button>
          <Button size="medium" color="btnCard">
            Ver detalhes
          </Button>
        </div>
      </div>
    </li>
  );
};

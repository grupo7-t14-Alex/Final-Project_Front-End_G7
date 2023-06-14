import { Header } from "@/components/header";
import Image from "next/image";
import car from "../../img/car.png";
import { Button } from "@/components/button";
import { cars } from "../dtaBase";
import { Footer } from "@/components/footer";

const SellerProfile = async () => {
  return (
    <>
      <Header />
      <main className="gradient w-full h-max flex flex-col mx-auto items-center">
        <div className="profile-info mt-32 flex flex-col">
          <figcaption className="w-32 h-32 rounded-full">
            <Image src={car} alt="carro" />
          </figcaption>
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-xl">Seller Name</h2>
            <span className="p-1 text-brand-1 bg-brand-4 font-medium rounded">
              Anunciante
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quae
            voluptate facilis explicabo ullam nihil pariatur provident, possimus
            veniam nostrum maxime, autem molestias delectus aspernatur iste
            laudantium laborum illo nobis?
          </p>
          <Button size="medium" color="outlineBrand1">
            Criar Anuncio
          </Button>
        </div>
        <ul className="w-[90%] h-500 my-24 flex flex-row overflow-x-auto items-center justify-start gap-8 md:flex-wrap md:h-max">
          {cars.map((car) => (
            <li
              key={car.id}
              className="w-19.5 h-430 border rounded-md border-transparent bg-white"
            >
              <figure className="bg-brand-4 px-6 py-px">
                <img src={car.urlImage} alt="imagem carro" />
              </figure>
              <div className="overflow-hidden p-4 flex flex-col gap-7 max-h-full">
                <h5 className="font-lexdend font-semibold text-base text-gray-0">
                  {car.brand}-{car.model}
                </h5>
                <p className="w-4/5 break-words font-inter font-normal text-sm text-gray-200 line-clamp-2">
                  dadadaudadaojijiocnscnjedcnedbrbycbrncviovoirvidnvubsbsuycmascimsmuhgruihunuinsnuicniscsocsnpsuivnfvndunvudscmisocoiejfuirfnuivnsurvsnp
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src="https://rare-gallery.com/mocahbig/396683-wallpaper-satoru-gojo-jujutsu-kaisen-4k-hd.jpg"
                    alt="profile image"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="break-words font-inter font-medium text-sm text-gray-200">
                    {car.owner}
                  </span>
                </div>
                <div className="w-11/12 grid grid-cols-4">
                  <span className="line-clamp-1 font-inter font-medium text-sm text-brand-2">
                    {car.km} KM
                  </span>
                  <span className="line-clamp-1 font-inter font-medium text-sm text-brand-2">
                    {car.year}
                  </span>
                  <span className="col-span-2 flex justify-center break-words font-lexend font-medium text-base text-gray-100">
                    {car.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </div>
            </li>
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

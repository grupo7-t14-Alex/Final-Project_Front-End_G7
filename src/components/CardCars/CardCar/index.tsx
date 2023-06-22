import { CarProps } from "@/types"
import Image from "next/image"

interface Car{
    car: CarProps
}

const CardCar = ({car}:Car) => {
    
    return (
        <li className="w-19.5 max-w-xs max-h-96 border rounded-md border-transparent">
            <figure className="bg-brand-4 px-6 py-px">
                <img src={car.coverPhoto} alt="imagem carro" />
            </figure>
                <div className="overflow-hidden p-4 flex flex-col gap-7 max-h-full">
                    <h5 className="font-lexdend font-semibold text-base text-gray-0">{car.brand}-{car.brand}</h5>
                    <p className="w-4/5 break-words font-inter font-normal text-sm text-gray-200 line-clamp-2">{car.description}</p>
                    <div className="flex items-center gap-2" >
                      <img src="https://rare-gallery.com/mocahbig/396683-wallpaper-satoru-gojo-jujutsu-kaisen-4k-hd.jpg" alt="profile image" className="w-8 h-8 rounded-full" />
                      <span className="break-words font-inter font-medium text-sm text-gray-200">{car.user.name}</span>
                    </div>
                    <div className="w-11/12 grid grid-cols-4">
                      <span className="font-inter font-medium text-sm text-brand-2">{car.milage} KM</span>
                      <span className="line-clamp-1 font-inter font-medium text-sm text-brand-2">{car.year}</span>
                      <span className="col-span-2 flex justify-center break-words font-lexend font-medium text-base text-gray-100">{car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                </div>
        </li>
    )
}

export default CardCar
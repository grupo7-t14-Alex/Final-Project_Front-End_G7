import { CarProps } from "@/types"
import { useRouter } from "next/navigation"
interface Car{
    car: CarProps
}
const CardCar = ({car}:Car) => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1
    const num = `bg-${numeroAleatorio}`
    const randomClass = `p-1 rounded-full text-white text-center bg-random-7`
    const router = useRouter()
    return (
        <li className="w-full max-w-[312px] h-[350px] bg-white cursor-pointer" onClick={()=> router.push(`/cardetails/${car.id}`)}>
            <div className="bg-gray-700 w-full h-40%">
                <img  src={car.coverPhoto} alt={car.model} className="w-full h-[152px]"/>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className=" text-base font-semibold mt-3">{car.brand}-{car.model}</h3>
                <p className=" text-sm text-gray-200 break-words line-clamp-2">{car.description}</p>
                <div className="flex gap-3 items-center">
                    <span className={randomClass}>{car.user.name.slice(0,2).toUpperCase()}</span>
                    <p className="text-sm text-gray-200 font-medium">{car.user.name}</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <span className=" py-1 px-2 bg-brand-4 text-brand-1 border-none text-sm font-medium">{car.milage.toString().slice(0,5)} KM</span>
                        <span className="py-1 px-2 bg-brand-4 text-brand-1 border-none text-sm font-medium">{car.year}</span>
                    </div>
                    <p>{car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
            </div>
        </li>
    )
}
export default CardCar
import { FipeProvider } from "@/context/KenzieApi.Context"
import { ReactNode } from "react"
interface ChildrenProps {
    children: ReactNode
}
const SellerLayout = ({children}:ChildrenProps) =>{
    return(
       <>
            <FipeProvider>
                {children}
            </FipeProvider>
       </>
    )
}
export default SellerLayout
"use client"

import { useRouter } from "next/navigation";

interface UserDetailsProps {
    name: string;
    description?: string;
    id: string;
}

const UserDetails = ({name, description, id}:UserDetailsProps) => {
    const router = useRouter()
    return(
        <div className="user-card">
            <div className="user-card-2">
                <span className="user-img-profile">SL</span>
                <h2 className="text-xl text-gray-100 font-semibold">
                 {name}
                </h2>
                <p className="text-gray-200 text-base">
                 {description}
                </p>
                <button className="btn-user" onClick={()=> router.push(`/seller/${id}`)} >Ver todos anuncios</button>
            </div>
        </div>
    )
}

export default UserDetails
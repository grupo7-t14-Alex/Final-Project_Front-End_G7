"use client"

import { useContext } from "react"
import { FipeContext } from "@/context/KenzieApi.Context"
import { Button } from "../button"
import { ModalAnnouncement } from "../modal/modalAnnouncement"



export const UserInfos = ({ seller }: any) => {

  const { openModal, setOpenModel } = useContext(FipeContext)

  return (
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
      {seller.seller ? (
        <Button size="medium" color="outlineBrand1" className="max-w-max" onClick={() => setOpenModel(!openModal)}>
          Criar Anuncio
        </Button>
      ) : null}
      {openModal && (<ModalAnnouncement sellerId={seller.id} />)}
    </div>
  )
}
export default UserInfos
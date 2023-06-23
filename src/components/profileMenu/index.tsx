"use client";

import { Seller } from "@/app/seller/[id]/page";
import { UserContext } from "@/context/User.Context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { useContext } from "react";
import { ModalUpdate } from "../modal/modalEditUser";

interface ProfileMenuProps {
  user: Seller;
}

export const ProfileMenu = ({ user }: ProfileMenuProps) => {

  const { openModalUp, setOpenModalUp } = useContext(UserContext)

  const router = useRouter();
  async function logout() {
    destroyCookie(null, "@token");
    destroyCookie(null, "@id"); 
    router.push("/");
    router.refresh()
  }


  return (
    <>
      { openModalUp && <ModalUpdate openModalUp={openModalUp} setOpenModalUp={setOpenModalUp}/>}
      <div className="z-10 profile-menu">
        <ul className="w-full flex flex-col gap-2">
          <li className="w-full">
            <button className="w-full"onClick={() => setOpenModalUp(true)} >Editar Perfil</button>
          </li>
          <li className="w-full">
            <button className="w-full">Editar Endereço</button>
          </li>
          {user.seller ? (
            <li className="w-full">
              <Link href={`/seller/${user.id}`} className="w-full">
                Meus Anúncios
              </Link>
            </li>
          ) : null}
          <li className="w-full">
            <button className="w-full" onClick={logout}>
              Sair
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

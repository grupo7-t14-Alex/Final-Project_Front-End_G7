"use client";

import { Seller } from "@/app/seller/[id]/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";

interface ProfileMenuProps {
  user: Seller;
}

export const ProfileMenu = ({ user }: ProfileMenuProps) => {
  const router = useRouter();
  async function logout() {
    destroyCookie(null, "@token");
    destroyCookie(null, "@id");
    router.push("/");
  }

  return (
    <>
      <div className="profile-menu">
        <ul className="w-full flex flex-col gap-2">
          <li className="w-full">
            <button className="w-full">Editar Perfil</button>
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

"use client"
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { GiHamburgerMenu} from "react-icons/gi"
import { AiOutlineClose} from "react-icons/ai"

export const Header = ({ children }: { children?: ReactNode }) => {
    const [hamburger, setHamburger] = useState(true)
    return (
        <header className="flex justify-between items-center p-4 border-b-2 border-b-[#DEE2E6]" id="header-top">
            <Link href={'/'}>
                <figure>
                    <Image
                        src="/assets/MotorShopLogo.png"
                        width={153}
                        height={26}
                        alt="Motor Shop"
                    />
                </figure>
            </Link>
            <div className="flex flex-col relative lg:hidden">
                <button onClick={()=> setHamburger(!hamburger)}>{ hamburger ?<GiHamburgerMenu/> : <AiOutlineClose/> }</button>
                {!hamburger &&
                 <div className="w-[257px] absolute flex flex-col left-[-226px] top-[39px] z-50 bg-white p-4 gap-4">
                    {children}
                 </div>
                }
            </div>
            <div className="border-l-2 border-l-[#DEE2E6] pl-[44px] pr-[60px]  items-center hidden lg:flex">
                {children}
            </div>
        </header>
    );
};

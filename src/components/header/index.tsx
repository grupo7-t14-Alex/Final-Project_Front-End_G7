import Image from "next/image";
import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
    return (
        <header className="flex justify-between border-b-2 border-b-[#DEE2E6]" id="header-top">
            <figure className="ml-[60px] my-[26.83px]">
                <Image
                    src="/assets/MotorShopLogo.png"
                    width={153}
                    height={26}
                    alt="Motor Shop"
                />
            </figure>
            <div className="border-l-2 border-l-[#DEE2E6] pl-[44px] pr-[60px] flex items-center">
                {children}
            </div>
        </header>
    );
};

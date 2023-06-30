import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="flex justify-between flex-col lg:flex-row gap-4 items-center w-full h-[136px] p-4  bg-[#0B0D0D]">
            <figure>
                <Image
                    src="/assets/MotorShopFooter.png"
                    width={153}
                    height={26}
                    alt="Motor Shop"
                />
            </figure>
            <p className="text-sm select-none text-[#FFFFFF]">© 2022 - Todos os direitos reservados.</p>
            <a
                href="#header-top"
                className="px-[21px] py-[16px] bg-[#212529] rounded"
            >
                <Image
                    src="/assets/angle-up.png"
                    width={13}
                    height={20}
                    alt="Angle Up"
                />
            </a>
        </footer>
    );
};

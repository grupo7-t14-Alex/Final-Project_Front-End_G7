import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: "big" | "medium";
    color:
        | "grey0"
        | "grey4"
        | "grey6"
        | "grey10"
        | "disabled"
        | "brand1"
        | "brand3"
        | "brand10"
        | "brandDisabled"
        | "outline"
        | "outlineBrand1"
        | "link"
        | "alert"
        | "btnCard"
        | "success";
    children: ReactNode;
    borderstyle?: boolean;
    border?: "grey6";
    className?: string;
}

const sizesButton = {
    big: "py-[8px] px-[18px] rounded border-[1.5px] font-semibold text-base transition duration-200 ease-in-out text-center",
    medium: "py-[4px] px-[10px] rounded border-[1.5px] font-semibold text-base transition duration-200 ease-in-out text-center",
};

const colorClasses = {
    grey0: "bg-[#0B0D0D] border-[#0B0D0D] text-[#FFFFFF] hover:bg-[#212529]",
    grey4: "bg-[#ADB5BD] border-[#ADB5BD] text-[#0B0D0D]",
    grey6: "bg-[#DEE2E6] border-[#DEE2E6] text-[#495057] hover:bg-[#CED4DA] hover:border-[#CED4DA]",
    grey10: "bg-[#FDFDFD] border-[#FDFDFD] text-[#212529]",
    disabled: "bg-[#CED4DA] border-[#CED4DA] text-[#FFFFFF]",
    brand1: "bg-[#4529E6] border-[#4529E6] text-[#FFFFFF] hover:bg-[#5126EA] hover:border-[#5126EA]",
    brand3: "bg-[#EDEAFD] border-[#EDEAFD] text-[#4529E6]",
    brandDisabled: "bg-[#B0A6F0] border-[#B0A6F0] text-[#EDEAFD]",
    outline:
        "bg-transparent border-[#FDFDFD] text-[#FDFDFD] hover:bg-[#FDFDFD] hover:border-[#212529]",
    outlineBrand1:
        "bg-transparent border-[#4529E6] text-[#4529E6] hover:bg-[#EDEAFD] hover:border-[#4529E6]",
    link: "border-none text-[#0B0D0D] hover:bg-[#F1F3F5]",
    alert: "bg-[#FFE5E5] border-[#FFE5E5] text-[#CD2B31] hover:bg-[#FDD8D8] hover:border-[#FDD8D8]",
    success:
        "bg-[#DDF3E4] border-[#DDF3E4] text-[#18794E] hover:bg-[#CCEBD7] hover:border-[#CCEBD7]",
    brand10:
        "bg-[#DEE2E6] border-[#DEE2E6] text-[#495057] hover:bg-[#5126EA] hover:border-[#5126EA] hover:text-[#FFFFFF] : ''",
    btnCard:
        "bg-gray-1000 border-gray-200 text-gray-200 hover:border-gray-100 hover:text-gray-100",
};

const borderbtn = {
    grey6: "bg-[#DEE2E6] border-[#495057] text-[#495057] hover:bg-[#CED4DA] hover:border-[#CED4DA]",
};

export const Button = ({
    size,
    type,
    color,
    borderstyle,
    children,
    border,
    className,
    onClick,
}: ButtonProps) => {
    let buttonClasses = `${sizesButton[size]} ${colorClasses[color]}`;

    if (borderstyle) {
        buttonClasses += `${borderbtn[border!]}`;
    }
    return (
        <button
            className={`${buttonClasses} ${className}`}
            onClick={onClick}
            type={type ? type : "button"}
        >
            {children}
        </button>
    );
};

import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectProps {
    label?: string;
    children: ReactNode;
    register: UseFormRegisterReturn<string>;
}

export const Select = ({ label, children, register }: SelectProps) => {
    return (
        <div>
            {label && (
                <label className="text-sm text-[#212529] font-medium block mb-2">
                    {label}
                </label>
            )}
            <select
                className="w-full py-[16px] px-[10px] text-[#868E96] rounded border-[1.5px] border-[#E9ECEF] focus:outline-none focus:border-[#5126EA]"
                {...register}
            >
                {children}
            </select>
        </div>
    );
};

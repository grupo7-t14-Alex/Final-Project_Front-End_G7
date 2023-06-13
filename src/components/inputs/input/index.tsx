import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    id?: string
    label?: string;
    type: "text" | "email" | "number" | "password";
    placeholder?: string;
    register?: UseFormRegisterReturn<string>;
}

export const Input = ({ id, label, type, placeholder, register }: InputProps) => {
    return (
        <div className="w-full">
            {label ? (
                <label className="text-sm text-[#212529] font-medium block mb-2">
                    {label}
                </label>
            ) : null}
            <input
                className="w-full py-[16px] px-[10px] text-[#868E96] rounded border-[1.5px] border-[#E9ECEF] focus:outline-none focus:border-[#5126EA]"
                type={type}
                placeholder={placeholder}
                {...register}
            />
        </div>
    );
};

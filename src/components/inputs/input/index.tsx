import { InputHTMLAttributes, forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    id?: string
    label?: string;
    type: "text" | "email" | "number" | "password";
    placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, type, placeholder, ...rest }, ref) => {
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
                ref={ref}
                {...rest}
            />
        </div>
    );
})

Input.displayName = 'Input';
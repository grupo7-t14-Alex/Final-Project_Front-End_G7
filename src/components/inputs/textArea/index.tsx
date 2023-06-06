import { UseFormRegisterReturn } from "react-hook-form";

interface TextArea {
    label?: string;
    placeholder?: string;
    register: UseFormRegisterReturn<string>;
}

export const TextArea = ({ label, placeholder, register }: TextArea) => {
    return (
        <div>
            {label ? (
                <label className="text-sm text-[#212529] font-medium block mb-2">
                    {label}
                </label>
            ) : null}
            <textarea
                className="w-full h-[80px] py-[16px] px-[10px] text-[#868E96] rounded border-[1.5px] border-[#E9ECEF] focus:outline-none focus:border-[#5126EA]"
                placeholder={placeholder}
                {...register}
            />
        </div>
    );
};

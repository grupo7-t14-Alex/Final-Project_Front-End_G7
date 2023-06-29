import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id?: string;
    label?: string;
    placeholder?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextArea>(
    ({ id, label, placeholder, ...rest }, ref) => {
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
                    ref={ref}
                    {...rest}
                />
            </div>
        );
    }
);

TextArea.displayName = "TextArea";

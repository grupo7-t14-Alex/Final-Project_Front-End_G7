import { ReactNode } from "react";

export const Modal = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center justify-center fixed z-10 w-screen h-screen top-0 left-0 bg-black bg-opacity-50">
            {children}
        </div>
    );
};

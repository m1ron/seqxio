import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    variant?: "primary" | "outline";
}

const Button = ({ children, onClick, className = "", type = "button", variant = "primary", }: ButtonProps) => {
    const baseStyles =
        "";

    const variants = {
        primary: "text-white  bg-gradient-to-r from-dark-green to-green hover:from-dark-green-hover hover:to-green-hover focus:from-dark-green-hover focus:to-green-hover",
        outline: "border border-dark-green bg-white text-dark-green hover:bg-dark-green hover:text-white",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-2 px-5 text-sm leading-6 font-medium whitespace-nowrap rounded-[15px] transition-colors cursor-pointer outline-none ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
import { ReactNode } from "react";
import { cn } from "@/app/utils/helper";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    variant?: "primary" | "outline";
    disabled?: boolean;
}

const Button = ({
    children,
    onClick,
    className,
    type = "button",
    variant = "primary",
    disabled = false,
}: ButtonProps) => {
    const baseStyles =
        "px-4 text-sm leading-6 font-medium whitespace-nowrap rounded-[15px] transition-colors duration-300 ease-out cursor-pointer select-none outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {
        primary:
            "py-2 text-white bg-gradient-to-r from-dark-green to-green hover:from-dark-green-hover hover:to-green-hover focus:from-dark-green-hover focus:to-green-hover",
        outline:
            "py-1.75 duration-200 border border-dark-green text-dark-green hover:text-white hover:bg-gradient-to-r hover:from-dark-green-hover hover:to-green-hover focus:text-white focus:bg-gradient-to-r focus:from-dark-green-hover focus:to-green-hover",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(baseStyles, variants[variant], className)}
        >
            {children}
        </button>
    );
};

export default Button;
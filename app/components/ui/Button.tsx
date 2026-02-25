import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "outline";
}

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  const baseStyles =
    "font-medium md:text-lg text-base leading-120 text-center p-3 rounded-full min-h-[50px] cursor-pointer transition-all ease-linear duration-300 -tracking-[0.64px]";

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-[#155234] to-[#227D53] hover:opacity-85",

    outline:
      "border border-dark-green bg-white text-dark-green hover:bg-dark-green hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

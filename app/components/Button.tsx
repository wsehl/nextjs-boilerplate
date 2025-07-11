import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] focus:ring-foreground",
    secondary:
      "bg-[#f2f2f2] dark:bg-[#1a1a1a] text-foreground hover:bg-[#e6e6e6] dark:hover:bg-[#2a2a2a] focus:ring-[#f2f2f2]",
    outline:
      "border border-solid border-black/[.08] dark:border-white/[.145] bg-transparent hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent focus:ring-black/[.08]",
    ghost:
      "bg-transparent hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] focus:ring-[#f2f2f2]",
  };

  const sizeStyles = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm sm:text-base sm:h-12 sm:px-5",
    lg: "h-12 px-6 text-base sm:h-14 sm:px-8",
  };

  const combinedClassName =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button className={combinedClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-blue-700 bg-blue-700 text-white shadow-sm hover:bg-blue-800 focus-visible:outline-blue-700",
  secondary:
    "border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline-slate-500",
  ghost:
    "border-transparent bg-transparent text-slate-600 hover:bg-slate-100 focus-visible:outline-slate-500",
};

export function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex h-9 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

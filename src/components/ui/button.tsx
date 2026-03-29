"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#d4a017] text-[#1a1208] hover:bg-[#f0be2a] btn-clip",
        outline:
          "border-[#d4a017]/50 text-[#c8b67a] hover:border-[#d4a017] hover:text-[#d4a017] btn-clip",
        secondary:
          "bg-[#3d2c12] text-[#f5e6c0] hover:bg-[#4a3d1f]",
        ghost:
          "hover:bg-[#3d2c12] hover:text-[#f5e6c0]",
        link: "text-[#c8b67a] underline-offset-4 hover:underline",
        nav: "bg-[#d4a017] text-[#1a1208] hover:bg-[#f0be2a] btn-clip-sm font-semibold",
      },
      size: {
        default: "h-12 px-9 py-4 gap-2",
        sm: "h-9 px-6 py-2 text-xs btn-clip-sm",
        lg: "h-14 px-10 py-5 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };

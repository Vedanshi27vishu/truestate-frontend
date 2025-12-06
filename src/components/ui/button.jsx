import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none px-3 py-2 rounded-md border",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-100",
      },
      size: {
        default: "h-9 px-4",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
})

Button.displayName = "Button"

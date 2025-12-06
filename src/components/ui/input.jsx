import * as React from "react"
import { cn } from "@/lib/utils"

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 text-sm",
        className
      )}
      {...props}
    />
  )
})

Input.displayName = "Input"

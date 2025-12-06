import * as React from "react";
import { cn } from "@/lib/utils";

export function Select({ children, ...props }) {
  return (
    <select
      className="h-9 px-3 rounded-md border border-gray-300 bg-white text-sm"
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children }) {
  return (
    <div className="h-9 px-3 flex items-center border border-gray-300 rounded-md bg-white text-sm">
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return <div className="border border-gray-300 bg-white rounded-md">{children}</div>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

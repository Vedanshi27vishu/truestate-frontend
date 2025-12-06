import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select.jsx";

import { Calendar, SlidersHorizontal } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm px-4 py-3 flex flex-wrap items-center gap-3 text-xs">
      {/* Refresh icon just to mimic UI */}
      <button className="h-7 w-7 rounded-full border border-slate-200 flex items-center justify-center">
        <SlidersHorizontal className="h-3.5 w-3.5 text-slate-500" />
      </button>

      {/* Customer Region */}
      <FilterSelect label="Customer Region">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="north">North</SelectItem>
        <SelectItem value="south">South</SelectItem>
        <SelectItem value="east">East</SelectItem>
        <SelectItem value="west">West</SelectItem>
      </FilterSelect>

      {/* Gender */}
      <FilterSelect label="Gender">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="female">Female</SelectItem>
        <SelectItem value="male">Male</SelectItem>
      </FilterSelect>

      {/* Age Range */}
      <FilterSelect label="Age Range">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="18-25">18 - 25</SelectItem>
        <SelectItem value="26-35">26 - 35</SelectItem>
      </FilterSelect>

      {/* Product Category */}
      <FilterSelect label="Product Category">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="clothing">Clothing</SelectItem>
        <SelectItem value="electronics">Electronics</SelectItem>
      </FilterSelect>

      {/* Payment Method */}
      <FilterSelect label="Payment Method">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="upi">UPI</SelectItem>
        <SelectItem value="card">Card</SelectItem>
        <SelectItem value="cash">Cash</SelectItem>
      </FilterSelect>

      {/* Date */}
      <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-[11px] text-slate-600">
        <Calendar className="h-3.5 w-3.5" />
        Date
      </button>

      {/* Sort by */}
      <FilterSelect label="Sort by: Customer Name (A–Z)">
        <SelectItem value="date-desc">Date (Newest first)</SelectItem>
        <SelectItem value="quantity">Quantity</SelectItem>
        <SelectItem value="name">Customer Name (A–Z)</SelectItem>
      </FilterSelect>
    </div>
  );
}

function FilterSelect({ label, children }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[11px] text-slate-500">{label}</span>
      <Select>
        <SelectTrigger className="h-8 min-w-[120px] text-[11px] border-slate-200">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent className="text-xs">{children}</SelectContent>
      </Select>
    </div>
  );
}

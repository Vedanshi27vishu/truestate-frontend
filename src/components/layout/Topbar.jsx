import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6">
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold">Sales Management System</h1>
        <p className="text-[11px] text-slate-500">
          Track customer transactions and revenue
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative w-64">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <Input
            className="pl-8 h-8 text-xs rounded-full bg-[#f5f6fb] border-none focus-visible:ring-slate-300"
            placeholder="Name, Phone no."
          />
        </div>
        <div className="h-8 w-8 rounded-full bg-slate-300" />
      </div>
    </header>
  );
}

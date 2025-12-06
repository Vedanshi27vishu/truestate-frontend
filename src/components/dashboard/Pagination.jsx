import { Button } from "@/components/ui/button";

export default function Pagination() {
  return (
    <div className="h-10 border-t border-slate-200 flex items-center justify-end px-4 gap-1 bg-white">
      {[1, 2, 3, 4, 5, 6].map((p) => (
        <Button
          key={p}
          variant={p === 2 ? "default" : "outline"}
          size="icon"
          className={`h-7 w-7 text-[11px] ${
            p === 2
              ? "bg-[#27327a] text-white hover:bg-[#202864]"
              : "border-slate-200 text-slate-600"
          }`}
        >
          {p}
        </Button>
      ))}
    </div>
  );
}

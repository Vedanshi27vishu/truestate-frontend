import { Card, CardContent } from "@/components/ui/card";

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
      <SummaryCard
        title="Total units sold"
        value="10"
        helper="Last 24 hrs"
      />
      <SummaryCard
        title="Total Amount"
        value="₹89,000"
        helper="(49 SRs)"
      />
      <SummaryCard
        title="Total Discount"
        value="₹15,000"
        helper="(45 SRs)"
      />
    </div>
  );
}

function SummaryCard({ title, value, helper }) {
  return (
    <Card className="border border-slate-200 shadow-sm rounded-xl">
      <CardContent className="py-3 px-4 flex flex-col gap-1">
        <p className="text-[11px] text-slate-500">{title}</p>
        <p className="text-base font-semibold">{value}</p>
        <p className="text-[11px] text-slate-500">{helper}</p>
      </CardContent>
    </Card>
  );
}

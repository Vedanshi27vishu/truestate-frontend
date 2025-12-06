import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rows = Array.from({ length: 10 }).map((_, i) => ({
  id: 1234567,
  date: "2023-09-26",
  customerId: "CUST12016",
  customerName: i === 3 ? "Avan Singh" : "Neha Yadav",
  phone: "+91 9123456789",
  gender: "Female",
  age: 25,
  category: "Clothing",
  qty: "01",
  region: "South",
  totalAmount: "₹ 1,000",
}));

export default function SalesTable() {
  return (
    <>
      <div className="border-b border-slate-200 px-4 py-2 text-[11px] text-slate-500">
        Full table view
      </div>
      <div className="flex-1 overflow-auto">
        <Table className="min-w-full text-xs">
          <TableHeader className="bg-[#f5f6fb]">
            <TableRow className="border-b border-slate-200">
              <TableHead className="font-semibold">Transaction ID</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Customer ID</TableHead>
              <TableHead className="font-semibold">Customer name</TableHead>
              <TableHead className="font-semibold">Phone Number</TableHead>
              <TableHead className="font-semibold">Gender</TableHead>
              <TableHead className="font-semibold">Age</TableHead>
              <TableHead className="font-semibold">Product Category</TableHead>
              <TableHead className="font-semibold">Quantity</TableHead>
              <TableHead className="font-semibold">Total Amount</TableHead>
              <TableHead className="font-semibold">Customer region</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, idx) => (
              <TableRow
                key={idx}
                className="border-b border-slate-100 hover:bg-[#f5f6fb]"
              >
                <TableCell>{r.id}</TableCell>
                <TableCell>{r.date}</TableCell>
                <TableCell>{r.customerId}</TableCell>
                <TableCell>{r.customerName}</TableCell>
                <TableCell>{r.phone}</TableCell>
                <TableCell>{r.gender}</TableCell>
                <TableCell>{r.age}</TableCell>
                <TableCell>{r.category}</TableCell>
                <TableCell>{r.qty}</TableCell>
                <TableCell>{r.totalAmount}</TableCell>
                <TableCell>{r.region}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

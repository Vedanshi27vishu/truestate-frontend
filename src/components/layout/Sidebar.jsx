import {
  ChevronDown,
  LayoutDashboard,
  FolderKanban,
  ClipboardList,
  CheckCircle,
  XCircle,
  Ban,
  FileText
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#f5f6f8] border-r px-4 py-5">

      {/* TOP PROFILE CARD */}
      <div className="bg-white border rounded-lg shadow-sm px-4 py-3 flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold">
            V
          </div>
          <div>
            <p className="font-semibold text-[15px] leading-4">Vault</p>
            <p className="text-[13px] text-gray-500">Anurag Yadav</p>
          </div>
        </div>
        <ChevronDown size={20} className="text-gray-600" />
      </div>

      {/* MAIN MENU */}
      <div className="mt-6 space-y-2">
        <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
        <SidebarItem icon={<FolderKanban size={18} />} label="Nexus" />
        <SidebarItem icon={<ClipboardList size={18} />} label="Intake" />
      </div>

      {/* SERVICES BOX */}
      <div className="mt-6 bg-white border rounded-lg shadow-sm">
        <DropdownHeader title="Services" />

        <div className="px-4 pb-3 space-y-1">
          <SidebarItem icon={<CheckCircle size={17} />} label="Pre-active" small />
          <SidebarItem icon={<CheckCircle size={17} />} label="Active" small />
          <SidebarItem icon={<XCircle size={17} />} label="Blocked" small />
          <SidebarItem icon={<Ban size={17} />} label="Closed" small />
        </div>
      </div>

      {/* INVOICES BOX */}
      <div className="mt-6 bg-white border rounded-lg shadow-sm">
        <DropdownHeader title="Invoices" />

        <div className="px-4 pb-3 space-y-1">
          <SidebarItem icon={<FileText size={17} />} label="Proforma Invoices" small />
          <SidebarItem icon={<FileText size={17} />} label="Final Invoices" small />
        </div>
      </div>

    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SidebarItem({ icon, label, small }) {
  return (
    <div
      className={`flex items-center gap-3 cursor-pointer
        ${small ? "py-2 text-[14px]" : "py-2.5 text-[15px] px-1"}
        text-gray-700 hover:bg-gray-100 rounded-md`}
    >
      <span className="text-gray-600">{icon}</span>
      {label}
    </div>
  );
}

function DropdownHeader({ title }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b cursor-pointer">
      <p className="text-[13px] font-semibold text-gray-600 uppercase tracking-wider">
        {title}
      </p>
      <ChevronDown size={17} className="text-gray-500" />
    </div>
  );
}

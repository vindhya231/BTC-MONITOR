import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  Network,
  Bell,
  FileText,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: ArrowLeftRight,
    },
    {
      name: "Wallet Analysis",
      path: "/wallet-analysis",
      icon: Wallet,
    },
    {
      name: "Network Graph",
      path: "/network-graph",
      icon: Network,
    },
    {
      name: "Alerts",
      path: "/alerts",
      icon: Bell,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: FileText,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white p-5">

      {/* Logo */}
      <div className="mb-8">

        <h1 className="text-2xl font-bold">
          ₿ BTC Monitor
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          AI-Powered Transaction Analysis
        </p>

      </div>

      {/* Navigation */}
      <nav className="space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >

              <Icon size={20} />

              <span>
                {item.name}
              </span>

            </NavLink>
          );

        })}

      </nav>

    </aside>
  );
}

export default Sidebar;
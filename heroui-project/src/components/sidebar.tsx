import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link as RouterLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  currentPath: string;
}

interface NavItem {
  label: string;
  icon: string;
  path: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentPath }) => {
  const navItems: NavItem[] = [
    { label: "Dashboard", icon: "lucide:layout-dashboard", path: "/" },
    { label: "Jobs", icon: "lucide:clipboard-list", path: "/jobs" },
    { label: "Customers", icon: "lucide:users", path: "/customers" },
    { label: "Reports", icon: "lucide:bar-chart", path: "/reports" },
    { label: "Settings", icon: "lucide:settings", path: "/settings" },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-0 sm:w-16"
      } bg-content1 border-r border-divider transition-all duration-300 overflow-hidden flex-shrink-0 hidden sm:block`}
    >
      <div className="h-full flex flex-col py-4">
        <div className="flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              as={RouterLink}
              to={item.path}
              className={`flex items-center px-4 py-3 mb-1 rounded-lg transition-colors ${
                currentPath === item.path
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-content2"
              }`}
            >
              <Icon icon={item.icon} className="text-xl" />
              <span className={`ml-3 ${!isOpen && "sm:hidden"}`}>{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="px-4 py-2">
          <div className="bg-content2 rounded-lg p-3">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon icon="lucide:headphones" className="text-primary" />
              </div>
              <div className={`ml-3 ${!isOpen && "sm:hidden"}`}>
                <p className="text-xs font-medium">Need help?</p>
                <p className="text-xs text-default-500">Contact support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
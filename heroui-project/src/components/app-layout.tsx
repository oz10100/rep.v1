import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link as RouterLink, useLocation, useHistory } from "react-router-dom";
import { Sidebar } from "./sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();
  const history = useHistory();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-content2">
      <Navbar isBordered maxWidth="full">
        <NavbarContent justify="start">
          <Button 
            isIconOnly 
            variant="light" 
            onPress={toggleSidebar}
            className="sm:hidden"
          >
            <Icon icon="lucide:menu" className="text-xl" />
          </Button>
          <NavbarBrand 
            as={RouterLink} 
            to="/" 
            className="cursor-pointer"
          >
            <Icon icon="lucide:zap" className="text-primary text-2xl" />
            <p className="font-bold text-inherit ml-2">RepairTrack</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button 
              as={RouterLink} 
              to="/jobs/new" 
              color="primary" 
              variant="solid"
              startContent={<Icon icon="lucide:plus" />}
            >
              New Job
            </Button>
          </NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="Shop Admin"
                size="sm"
                src="https://img.heroui.chat/image/avatar?w=150&h=150&u=admin123"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">admin@repairshop.com</p>
              </DropdownItem>
              <DropdownItem key="settings" onPress={() => history.push("/settings")}>
                Settings
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} currentPath={location.pathname} />
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};
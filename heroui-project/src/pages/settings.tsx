import React from "react";
import { Card, CardBody, CardHeader, Input, Button, Switch, Divider, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Settings: React.FC = () => {
  const [companyName, setCompanyName] = React.useState("RepairTrack");
  const [email, setEmail] = React.useState("admin@repairshop.com");
  const [phone, setPhone] = React.useState("(555) 987-6543");
  const [address, setAddress] = React.useState("123 Repair St, Fixville, TX 75001");
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [smsNotifications, setSmsNotifications] = React.useState(false);
  const [autoAssign, setAutoAssign] = React.useState(false);
  const [theme, setTheme] = React.useState("light");

  const handleSaveCompanyInfo = () => {
    alert("Company information saved successfully!");
  };

  const handleApplyTheme = () => {
    alert(`Theme changed to: ${theme}`);
  };

  const handleManageStaff = () => {
    alert("Staff management functionality would go here");
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Company Information</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <Input
            label="Company Name"
            value={companyName}
            onValueChange={setCompanyName}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email"
              value={email}
              onValueChange={setEmail}
            />
            <Input
              label="Phone"
              value={phone}
              onValueChange={setPhone}
            />
          </div>
          <Input
            label="Address"
            value={address}
            onValueChange={setAddress}
          />
          <div className="flex justify-end">
            <Button 
              color="primary"
              onPress={handleSaveCompanyInfo}
            >
              Save Changes
            </Button>
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Notifications</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-default-500">Receive job updates via email</p>
            </div>
            <Switch 
              isSelected={emailNotifications} 
              onValueChange={setEmailNotifications}
              color="primary"
            />
          </div>
          
          <Divider />
          
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">SMS Notifications</p>
              <p className="text-sm text-default-500">Receive job updates via SMS</p>
            </div>
            <Switch 
              isSelected={smsNotifications} 
              onValueChange={setSmsNotifications}
              color="primary"
            />
          </div>
          
          <Divider />
          
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Auto-assign Jobs</p>
              <p className="text-sm text-default-500">Automatically assign new jobs to available technicians</p>
            </div>
            <Switch 
              isSelected={autoAssign} 
              onValueChange={setAutoAssign}
              color="primary"
            />
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Appearance</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          <Select
            label="Theme"
            selectedKeys={[theme]}
            onChange={(e) => setTheme(e.target.value)}
          >
            <SelectItem key="light" value="light">Light</SelectItem>
            <SelectItem key="dark" value="dark">Dark</SelectItem>
            <SelectItem key="system" value="system">System Default</SelectItem>
          </Select>
          
          <div className="flex justify-end">
            <Button 
              color="primary"
              onPress={handleApplyTheme}
            >
              Apply
            </Button>
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Staff Management</h2>
        </CardHeader>
        <CardBody>
          <div className="flex justify-between items-center">
            <p>Manage technicians and staff members</p>
            <Button 
              color="primary" 
              variant="flat"
              startContent={<Icon icon="lucide:users" />}
              onPress={handleManageStaff}
            >
              Manage Staff
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
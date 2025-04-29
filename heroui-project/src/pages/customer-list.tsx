import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  jobCount: number;
  lastVisit: string;
}

export const CustomerList: React.FC = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const customers: Customer[] = [
    {
      id: "CUST-001",
      name: "John Smith",
      phone: "(555) 123-4567",
      email: "john.smith@example.com",
      jobCount: 3,
      lastVisit: "2023-08-15",
    },
    {
      id: "CUST-002",
      name: "Sarah Johnson",
      phone: "(555) 234-5678",
      email: "sarah.johnson@example.com",
      jobCount: 1,
      lastVisit: "2023-08-14",
    },
    {
      id: "CUST-003",
      name: "Mike Williams",
      phone: "(555) 345-6789",
      email: "mike.williams@example.com",
      jobCount: 2,
      lastVisit: "2023-08-13",
    },
    {
      id: "CUST-004",
      name: "Emily Davis",
      phone: "(555) 456-7890",
      email: "emily.davis@example.com",
      jobCount: 1,
      lastVisit: "2023-08-12",
    },
    {
      id: "CUST-005",
      name: "David Brown",
      phone: "(555) 567-8901",
      email: "david.brown@example.com",
      jobCount: 4,
      lastVisit: "2023-08-11",
    },
  ];

  const filteredCustomers = customers.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery)
    );
  });

  const handleViewCustomer = (customerId: string) => {
    // In a real app, this would navigate to a customer details page
    alert(`Viewing customer ${customerId}`);
  };

  const handleEditCustomer = (customerId: string) => {
    // In a real app, this would navigate to a customer edit page
    alert(`Editing customer ${customerId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customers</h1>
        <Button 
          color="primary" 
          startContent={<Icon icon="lucide:plus" />}
          onPress={() => alert("Add customer functionality would go here")}
        >
          Add Customer
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search customers..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          startContent={<Icon icon="lucide:search" className="text-default-400" />}
          className="w-full sm:max-w-xs"
        />
      </div>
      
      <Table aria-label="Customers table">
        <TableHeader>
          <TableColumn>CUSTOMER ID</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>CONTACT</TableColumn>
          <TableColumn>JOBS</TableColumn>
          <TableColumn>LAST VISIT</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {filteredCustomers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.id}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>{customer.phone}</span>
                  <span className="text-tiny text-default-400">{customer.email}</span>
                </div>
              </TableCell>
              <TableCell>
                <Chip size="sm" variant="flat" color="primary">
                  {customer.jobCount} {customer.jobCount === 1 ? "job" : "jobs"}
                </Chip>
              </TableCell>
              <TableCell>{customer.lastVisit}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="flat"
                    color="primary"
                    isIconOnly
                    onPress={() => handleViewCustomer(customer.id)}
                  >
                    <Icon icon="lucide:eye" className="text-sm" />
                  </Button>
                  <Button
                    size="sm"
                    variant="flat"
                    color="default"
                    isIconOnly
                    onPress={() => handleEditCustomer(customer.id)}
                  >
                    <Icon icon="lucide:edit" className="text-sm" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
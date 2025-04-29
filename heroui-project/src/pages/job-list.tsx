import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link as RouterLink, useHistory } from "react-router-dom";

interface Job {
  id: string;
  customer: string;
  phone: string;
  item: string;
  type: "starter" | "alternator" | "other";
  status: "pending" | "in_progress" | "completed";
  date: string;
  assignedTo?: string;
  customerReference?: string;
  partNumber?: string;
}

export const JobList: React.FC = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [technicianFilter, setTechnicianFilter] = React.useState<string>("all");

  const jobs: Job[] = [
    {
      id: "JOB-1234",
      customer: "John Smith",
      phone: "(555) 123-4567",
      item: "Ford F-150 Starter",
      type: "starter",
      status: "in_progress",
      date: "2023-08-15",
      assignedTo: "Michael Johnson",
      customerReference: "CUST-REF-789",
      partNumber: "ST-12345-F150",
    },
    {
      id: "JOB-1235",
      customer: "Sarah Johnson",
      phone: "(555) 234-5678",
      item: "Toyota Camry Alternator",
      type: "alternator",
      status: "completed",
      date: "2023-08-14",
      assignedTo: "Sarah Williams",
      customerReference: "CUST-REF-456",
      partNumber: "ALT-78901-CAM",
    },
    {
      id: "JOB-1236",
      customer: "Mike Williams",
      phone: "(555) 345-6789",
      item: "Honda Civic Starter",
      type: "starter",
      status: "pending",
      date: "2023-08-13",
      assignedTo: "David Garcia",
      customerReference: "CUST-REF-123",
      partNumber: "ST-56789-CIV",
    },
    {
      id: "JOB-1237",
      customer: "Emily Davis",
      phone: "(555) 456-7890",
      item: "Chevrolet Silverado Alternator",
      type: "alternator",
      status: "completed",
      date: "2023-08-12",
      assignedTo: "Lisa Rodriguez",
      customerReference: "CUST-REF-234",
      partNumber: "ALT-34567-SIL",
    },
    {
      id: "JOB-1238",
      customer: "David Brown",
      phone: "(555) 567-8901",
      item: "Nissan Altima Starter",
      type: "starter",
      status: "in_progress",
      date: "2023-08-11",
      assignedTo: "Michael Johnson",
      customerReference: "CUST-REF-345",
      partNumber: "ST-90123-ALT",
    },
    {
      id: "JOB-1239",
      customer: "Lisa Wilson",
      phone: "(555) 678-9012",
      item: "Jeep Wrangler Alternator",
      type: "alternator",
      status: "pending",
      date: "2023-08-10",
      assignedTo: "Sarah Williams",
      customerReference: "CUST-REF-567",
      partNumber: "ALT-45678-WRA",
    },
    {
      id: "JOB-1240",
      customer: "Robert Taylor",
      phone: "(555) 789-0123",
      item: "BMW 3 Series Starter",
      type: "starter",
      status: "completed",
      date: "2023-08-09",
      assignedTo: "David Garcia",
      customerReference: "CUST-REF-678",
      partNumber: "ST-23456-BMW",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "danger";
      case "in_progress":
        return "warning";
      case "completed":
        return "success";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending":
        return "Pending";
      case "in_progress":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = 
      job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (job.customerReference && job.customerReference.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (job.partNumber && job.partNumber.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    const matchesTechnician = technicianFilter === "all" || job.assignedTo === technicianFilter;
    
    return matchesSearch && matchesStatus && matchesTechnician;
  });

  const technicians = [...new Set(jobs.map(job => job.assignedTo).filter(Boolean))];

  const handleViewJob = (jobId: string) => {
    history.push(`/jobs/${jobId}`);
  };

  const handleEditJob = (jobId: string) => {
    history.push(`/jobs/${jobId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Repair Jobs</h1>
        <Button 
          as={RouterLink} 
          to="/jobs/new" 
          color="primary" 
          startContent={<Icon icon="lucide:plus" />}
        >
          New Job
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search jobs..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          startContent={<Icon icon="lucide:search" className="text-default-400" />}
          className="w-full sm:max-w-xs"
        />
        
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="flat" 
              endContent={<Icon icon="lucide:chevron-down" className="text-small" />}
            >
              Status: {statusFilter === "all" ? "All" : getStatusLabel(statusFilter)}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Status filter"
            onAction={(key) => setStatusFilter(key as string)}
            selectedKeys={[statusFilter]}
            selectionMode="single"
          >
            <DropdownItem key="all">All</DropdownItem>
            <DropdownItem key="pending">Pending</DropdownItem>
            <DropdownItem key="in_progress">In Progress</DropdownItem>
            <DropdownItem key="completed">Completed</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="flat" 
              endContent={<Icon icon="lucide:chevron-down" className="text-small" />}
            >
              Technician: {technicianFilter === "all" ? "All" : technicianFilter}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Technician filter"
            onAction={(key) => setTechnicianFilter(key as string)}
            selectedKeys={[technicianFilter]}
            selectionMode="single"
          >
            <DropdownItem key="all">All</DropdownItem>
            {technicians.map((tech) => (
              <DropdownItem key={tech as string}>{tech}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      
      <Table aria-label="Jobs table">
        <TableHeader>
          <TableColumn>JOB ID</TableColumn>
          <TableColumn>CUSTOMER</TableColumn>
          <TableColumn>CONTACT</TableColumn>
          <TableColumn>ITEM</TableColumn>
          <TableColumn>ASSIGNED TO</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>DATE</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {filteredJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>
                <div className="flex flex-col">
                  <span>{job.id}</span>
                  {job.customerReference && (
                    <span className="text-tiny text-default-400">Ref: {job.customerReference}</span>
                  )}
                </div>
              </TableCell>
              <TableCell>{job.customer}</TableCell>
              <TableCell>{job.phone}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>{job.item}</span>
                  <span className="text-tiny text-default-400 capitalize">{job.type}</span>
                  {job.partNumber && (
                    <span className="text-tiny text-default-400">PN: {job.partNumber}</span>
                  )}
                </div>
              </TableCell>
              <TableCell>{job.assignedTo || "Unassigned"}</TableCell>
              <TableCell>
                <Chip
                  size="sm"
                  color={getStatusColor(job.status) as any}
                  variant="flat"
                >
                  {getStatusLabel(job.status)}
                </Chip>
              </TableCell>
              <TableCell>{job.date}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="flat"
                    color="primary"
                    isIconOnly
                    onPress={() => handleViewJob(job.id)}
                  >
                    <Icon icon="lucide:eye" className="text-sm" />
                  </Button>
                  <Button
                    size="sm"
                    variant="flat"
                    color="default"
                    isIconOnly
                    onPress={() => handleEditJob(job.id)}
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
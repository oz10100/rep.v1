import React from "react";
import { Card, CardBody, CardHeader, Chip, Button, Divider, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useParams, useHistory } from "react-router-dom";

interface JobDetailsParams {
  id: string;
}

export const JobDetails: React.FC = () => {
  const { id } = useParams<JobDetailsParams>();
  const history = useHistory();
  const [status, setStatus] = React.useState<string>("in_progress");
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [editFormData, setEditFormData] = React.useState({
    customerName: "John Smith",
    phone: "(555) 123-4567",
    email: "john.smith@example.com",
    customerReference: "CUST-REF-789",
    siteLocation: "Main Factory - Building B",
    itemType: "starter",
    itemDescription: "Ford F-150 Starter",
    make: "Ford",
    model: "F-150",
    year: "2018",
    partNumber: "ST-12345-F150",
    assignedTo: "Michael Johnson",
    notes: "Customer reported intermittent starting issues. Initial inspection shows worn brushes and possible solenoid issues."
  });
  
  const jobDetails = {
    id: id,
    customer: "John Smith",
    phone: "(555) 123-4567",
    email: "john.smith@example.com",
    customerReference: "CUST-REF-789",
    siteLocation: "Main Factory - Building B",
    item: "Ford F-150 Starter",
    type: "starter",
    make: "Ford",
    model: "F-150",
    year: "2018",
    partNumber: "ST-12345-F150",
    assignedTo: "Michael Johnson",
    status: "in_progress",
    date: "2023-08-15",
    notes: "Customer reported intermittent starting issues. Initial inspection shows worn brushes and possible solenoid issues.",
    timeline: [
      { date: "2023-08-15", status: "created", note: "Job created and assigned to Michael Johnson" },
      { date: "2023-08-16", status: "in_progress", note: "Disassembly started, confirmed worn brushes" },
      { date: "2023-08-17", status: "in_progress", note: "Parts ordered, ETA 2 days" },
    ]
  };

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

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    // In a real app, you would update the status in your backend
  };

  const handleReassign = (technicianId: string) => {
    console.log(`Reassigning job ${id} to technician ${technicianId}`);
    // In a real app, you would update the assigned technician in your backend
  };

  const handleEditInputChange = (field: string, value: string) => {
    setEditFormData({
      ...editFormData,
      [field]: value,
    });
  };

  const handleSaveEdit = () => {
    console.log("Saving edited job:", editFormData);
    // In a real app, you would update the job in your backend
    setIsEditModalOpen(false);
    // Show success message
    alert("Job updated successfully!");
  };

  const itemTypes = [
    { value: "starter", label: "Starter" },
    { value: "alternator", label: "Alternator" },
    { value: "other", label: "Other" },
  ];

  const technicians = [
    { value: "Michael Johnson", label: "Michael Johnson" },
    { value: "Sarah Williams", label: "Sarah Williams" },
    { value: "David Garcia", label: "David Garcia" },
    { value: "Lisa Rodriguez", label: "Lisa Rodriguez" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Button
              isIconOnly
              variant="light"
              onPress={() => history.push("/jobs")}
            >
              <Icon icon="lucide:arrow-left" />
            </Button>
            <h1 className="text-2xl font-bold">Job {id}</h1>
          </div>
          <p className="text-default-500">Created on {jobDetails.date}</p>
        </div>
        
        <div className="flex gap-2">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="flat"
                color={getStatusColor(status) as any}
                endContent={<Icon icon="lucide:chevron-down" />}
              >
                {getStatusLabel(status)}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Status actions"
              onAction={(key) => handleStatusChange(key as string)}
            >
              <DropdownItem key="pending">Pending</DropdownItem>
              <DropdownItem key="in_progress">In Progress</DropdownItem>
              <DropdownItem key="completed">Completed</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
          <Button
            color="primary"
            startContent={<Icon icon="lucide:edit" />}
            onPress={() => setIsEditModalOpen(true)}
          >
            Edit
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Item Details</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-default-500">Item Type</p>
                  <p className="capitalize">{jobDetails.type}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Description</p>
                  <p>{jobDetails.item}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Make & Model</p>
                  <p>{jobDetails.make} {jobDetails.model}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Year</p>
                  <p>{jobDetails.year}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Part Number</p>
                  <p>{jobDetails.partNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Site Location</p>
                  <p>{jobDetails.siteLocation}</p>
                </div>
              </div>
              
              <Divider className="my-4" />
              
              <div>
                <p className="text-sm text-default-500 mb-1">Notes</p>
                <p className="text-sm">{jobDetails.notes}</p>
              </div>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Job Timeline</h2>
              <Button
                size="sm"
                variant="flat"
                color="primary"
                startContent={<Icon icon="lucide:plus" />}
              >
                Add Update
              </Button>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                {jobDetails.timeline.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      {index < jobDetails.timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-divider"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{event.note}</p>
                          <p className="text-xs text-default-500">{event.date}</p>
                        </div>
                        <Chip size="sm" variant="flat" color={getStatusColor(event.status) as any}>
                          {getStatusLabel(event.status)}
                        </Chip>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Customer Information</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-default-500">Name</p>
                  <p>{jobDetails.customer}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Phone</p>
                  <p>{jobDetails.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Email</p>
                  <p>{jobDetails.email}</p>
                </div>
                <div>
                  <p className="text-sm text-default-500">Customer Reference</p>
                  <p>{jobDetails.customerReference}</p>
                </div>
              </div>
              
              <div className="mt-4 flex gap-2">
                <Button
                  variant="flat"
                  startContent={<Icon icon="lucide:phone" />}
                  className="flex-1"
                  size="sm"
                >
                  Call
                </Button>
                <Button
                  variant="flat"
                  startContent={<Icon icon="lucide:mail" />}
                  className="flex-1"
                  size="sm"
                >
                  Email
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Assignment</h2>
            </CardHeader>
            <CardBody>
              <div className="mb-4">
                <p className="text-sm text-default-500">Currently Assigned To</p>
                <div className="flex items-center mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <Icon icon="lucide:user" className="text-primary" />
                  </div>
                  <p>{jobDetails.assignedTo}</p>
                </div>
              </div>
              
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="flat"
                    startContent={<Icon icon="lucide:users" />}
                    className="w-full"
                  >
                    Reassign
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Reassign job"
                  onAction={(key) => handleReassign(key as string)}
                >
                  <DropdownItem key="tech1">Michael Johnson</DropdownItem>
                  <DropdownItem key="tech2">Sarah Williams</DropdownItem>
                  <DropdownItem key="tech3">David Garcia</DropdownItem>
                  <DropdownItem key="tech4">Lisa Rodriguez</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Actions</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                <Button
                  startContent={<Icon icon="lucide:printer" />}
                  variant="flat"
                  className="w-full justify-start"
                >
                  Print Job Sheet
                </Button>
                <Button
                  startContent={<Icon icon="lucide:file-text" />}
                  variant="flat"
                  className="w-full justify-start"
                >
                  Generate Invoice
                </Button>
                <Button
                  startContent={<Icon icon="lucide:message-square" />}
                  variant="flat"
                  className="w-full justify-start"
                >
                  Send Status Update
                </Button>
                <Button
                  startContent={<Icon icon="lucide:trash-2" />}
                  color="danger"
                  variant="flat"
                  className="w-full justify-start"
                >
                  Delete Job
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      
      {/* Add Edit Job Modal */}
      <Modal 
        isOpen={isEditModalOpen} 
        onOpenChange={setIsEditModalOpen}
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Job {id}
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <h3 className="text-lg font-semibold md:col-span-2">Customer Information</h3>
                  <Input
                    label="Customer Name"
                    value={editFormData.customerName}
                    onValueChange={(value) => handleEditInputChange("customerName", value)}
                  />
                  <Input
                    label="Phone Number"
                    value={editFormData.phone}
                    onValueChange={(value) => handleEditInputChange("phone", value)}
                  />
                  <Input
                    label="Email Address"
                    value={editFormData.email}
                    onValueChange={(value) => handleEditInputChange("email", value)}
                  />
                  <Input
                    label="Customer Reference"
                    value={editFormData.customerReference}
                    onValueChange={(value) => handleEditInputChange("customerReference", value)}
                  />
                  <Input
                    label="Site Location"
                    value={editFormData.siteLocation}
                    onValueChange={(value) => handleEditInputChange("siteLocation", value)}
                    className="md:col-span-2"
                  />
                  
                  <Divider className="md:col-span-2 my-2" />
                  
                  <h3 className="text-lg font-semibold md:col-span-2">Item Details</h3>
                  <Select
                    label="Item Type"
                    selectedKeys={[editFormData.itemType]}
                    onChange={(e) => handleEditInputChange("itemType", e.target.value)}
                  >
                    {itemTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    label="Item Description"
                    value={editFormData.itemDescription}
                    onValueChange={(value) => handleEditInputChange("itemDescription", value)}
                  />
                  <Input
                    label="Make"
                    value={editFormData.make}
                    onValueChange={(value) => handleEditInputChange("make", value)}
                  />
                  <Input
                    label="Model"
                    value={editFormData.model}
                    onValueChange={(value) => handleEditInputChange("model", value)}
                  />
                  <Input
                    label="Year"
                    value={editFormData.year}
                    onValueChange={(value) => handleEditInputChange("year", value)}
                  />
                  <Input
                    label="Part Number"
                    value={editFormData.partNumber}
                    onValueChange={(value) => handleEditInputChange("partNumber", value)}
                  />
                  
                  <Divider className="md:col-span-2 my-2" />
                  
                  <h3 className="text-lg font-semibold md:col-span-2">Assignment</h3>
                  <Select
                    label="Assigned To"
                    selectedKeys={[editFormData.assignedTo]}
                    onChange={(e) => handleEditInputChange("assignedTo", e.target.value)}
                    className="md:col-span-2"
                  >
                    {technicians.map((tech) => (
                      <SelectItem key={tech.value} value={tech.value}>
                        {tech.label}
                      </SelectItem>
                    ))}
                  </Select>
                  
                  <Divider className="md:col-span-2 my-2" />
                  
                  <h3 className="text-lg font-semibold md:col-span-2">Additional Information</h3>
                  <Textarea
                    label="Notes"
                    value={editFormData.notes}
                    onValueChange={(value) => handleEditInputChange("notes", value)}
                    minRows={3}
                    className="md:col-span-2"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleSaveEdit}>
                  Save Changes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
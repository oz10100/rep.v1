import React from "react";
import { Card, CardBody, Input, Textarea, Button, Select, SelectItem, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";

export const JobForm: React.FC = () => {
  const history = useHistory();
  const [formData, setFormData] = React.useState({
    customerName: "",
    phone: "",
    email: "",
    customerReference: "",
    siteLocation: "",
    itemType: "",
    itemDescription: "",
    make: "",
    model: "",
    year: "",
    partNumber: "",
    assignedTo: "",
    notes: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real app, you would save the data to your backend here
    
    // Redirect to the jobs list page
    history.push("/jobs");
  };

  const itemTypes = [
    { value: "starter", label: "Starter" },
    { value: "alternator", label: "Alternator" },
    { value: "other", label: "Other" },
  ];

  const technicians = [
    { value: "tech1", label: "Michael Johnson" },
    { value: "tech2", label: "Sarah Williams" },
    { value: "tech3", label: "David Garcia" },
    { value: "tech4", label: "Lisa Rodriguez" },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create New Repair Job</h1>
        <p className="text-default-500">Enter customer and item details to create a new repair job</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardBody>
            <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Customer Name"
                placeholder="Enter customer name"
                value={formData.customerName}
                onValueChange={(value) => handleInputChange("customerName", value)}
                isRequired
              />
              <Input
                label="Phone Number"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onValueChange={(value) => handleInputChange("phone", value)}
                isRequired
              />
              <Input
                label="Email Address"
                placeholder="customer@example.com"
                value={formData.email}
                onValueChange={(value) => handleInputChange("email", value)}
              />
              <Input
                label="Customer Reference Number"
                placeholder="Customer's reference ID"
                value={formData.customerReference}
                onValueChange={(value) => handleInputChange("customerReference", value)}
              />
              <Input
                label="Site Location"
                placeholder="Where the item is coming from"
                value={formData.siteLocation}
                onValueChange={(value) => handleInputChange("siteLocation", value)}
                className="md:col-span-2"
              />
            </div>
          </CardBody>
        </Card>
        
        <Card className="mb-6">
          <CardBody>
            <h2 className="text-lg font-semibold mb-4">Item Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Item Type"
                placeholder="Select item type"
                selectedKeys={formData.itemType ? [formData.itemType] : []}
                onChange={(e) => handleInputChange("itemType", e.target.value)}
                isRequired
              >
                {itemTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>
              <Input
                label="Item Description"
                placeholder="Brief description of the item"
                value={formData.itemDescription}
                onValueChange={(value) => handleInputChange("itemDescription", value)}
                isRequired
              />
              <Input
                label="Make"
                placeholder="e.g. Ford, Toyota, Honda"
                value={formData.make}
                onValueChange={(value) => handleInputChange("make", value)}
              />
              <Input
                label="Model"
                placeholder="e.g. F-150, Camry, Civic"
                value={formData.model}
                onValueChange={(value) => handleInputChange("model", value)}
              />
              <Input
                label="Year"
                placeholder="e.g. 2018"
                value={formData.year}
                onValueChange={(value) => handleInputChange("year", value)}
              />
              <Input
                label="Part Number"
                placeholder="Manufacturer part number"
                value={formData.partNumber}
                onValueChange={(value) => handleInputChange("partNumber", value)}
              />
            </div>
          </CardBody>
        </Card>
        
        <Card className="mb-6">
          <CardBody>
            <h2 className="text-lg font-semibold mb-4">Assignment</h2>
            <Select
              label="Assign To"
              placeholder="Select technician"
              selectedKeys={formData.assignedTo ? [formData.assignedTo] : []}
              onChange={(e) => handleInputChange("assignedTo", e.target.value)}
            >
              {technicians.map((tech) => (
                <SelectItem key={tech.value} value={tech.value}>
                  {tech.label}
                </SelectItem>
              ))}
            </Select>
          </CardBody>
        </Card>
        
        <Card className="mb-6">
          <CardBody>
            <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
            <Textarea
              label="Notes"
              placeholder="Enter any additional notes or repair instructions"
              value={formData.notes}
              onValueChange={(value) => handleInputChange("notes", value)}
              minRows={3}
            />
          </CardBody>
        </Card>
        
        <div className="flex justify-end gap-2">
          <Button
            variant="flat"
            onPress={() => history.push("/jobs")}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            type="submit"
            startContent={<Icon icon="lucide:save" />}
          >
            Create Job
          </Button>
        </div>
      </form>
    </div>
  );
};
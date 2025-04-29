import React from "react";
import { Card, CardBody, CardHeader, Button, Tabs, Tab, Divider, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Reports: React.FC = () => {
  const [timeframe, setTimeframe] = React.useState("month");

  const jobsByType = [
    { type: "Starter", count: 18, percentage: 45 },
    { type: "Alternator", count: 14, percentage: 35 },
    { type: "Other", count: 8, percentage: 20 },
  ];

  const jobsByStatus = [
    { status: "Completed", count: 24, color: "success" },
    { status: "In Progress", count: 12, color: "warning" },
    { status: "Pending", count: 4, color: "danger" },
  ];

  const topTechnicians = [
    { name: "Michael Johnson", jobsCompleted: 15, efficiency: 98 },
    { name: "Sarah Williams", jobsCompleted: 12, efficiency: 95 },
    { name: "David Garcia", jobsCompleted: 9, efficiency: 92 },
  ];

  const handleExport = () => {
    alert(`Exporting ${timeframe} report data...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex gap-2">
          <Select
            selectedKeys={[timeframe]}
            onChange={(e) => setTimeframe(e.target.value)}
            className="w-40"
          >
            <SelectItem key="week" value="week">This Week</SelectItem>
            <SelectItem key="month" value="month">This Month</SelectItem>
            <SelectItem key="quarter" value="quarter">This Quarter</SelectItem>
            <SelectItem key="year" value="year">This Year</SelectItem>
          </Select>
          <Button
            variant="flat"
            startContent={<Icon icon="lucide:download" />}
            onPress={handleExport}
          >
            Export
          </Button>
        </div>
      </div>
      
      <Tabs aria-label="Report options">
        <Tab key="overview" title="Overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardBody>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-default-500 text-sm">Total Jobs</p>
                    <p className="text-3xl font-bold">40</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon icon="lucide:clipboard-list" className="text-primary text-xl" />
                  </div>
                </div>
                <p className="text-xs text-success mt-2">↑ 12% from last month</p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-default-500 text-sm">Revenue</p>
                    <p className="text-3xl font-bold">$8,240</p>
                  </div>
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Icon icon="lucide:dollar-sign" className="text-success text-xl" />
                  </div>
                </div>
                <p className="text-xs text-success mt-2">↑ 8% from last month</p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-default-500 text-sm">Avg. Completion Time</p>
                    <p className="text-3xl font-bold">2.4 days</p>
                  </div>
                  <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                    <Icon icon="lucide:clock" className="text-warning text-xl" />
                  </div>
                </div>
                <p className="text-xs text-danger mt-2">↑ 0.3 days from last month</p>
              </CardBody>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Jobs by Type</h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  {jobsByType.map((item) => (
                    <div key={item.type}>
                      <div className="flex justify-between mb-1">
                        <span>{item.type}</span>
                        <span>{item.count} jobs ({item.percentage}%)</span>
                      </div>
                      <div className="w-full bg-default-100 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Jobs by Status</h2>
              </CardHeader>
              <CardBody>
                <div className="flex justify-around">
                  {jobsByStatus.map((item) => (
                    <div key={item.status} className="text-center">
                      <div className={`w-16 h-16 rounded-full bg-${item.color}/20 flex items-center justify-center mx-auto`}>
                        <span className={`text-${item.color} text-xl font-bold`}>{item.count}</span>
                      </div>
                      <p className="mt-2">{item.status}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <h2 className="text-lg font-semibold">Top Performing Technicians</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                {topTechnicians.map((tech, index) => (
                  <div key={tech.name} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{tech.name}</p>
                      <p className="text-xs text-default-500">{tech.jobsCompleted} jobs completed</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{tech.efficiency}%</p>
                      <p className="text-xs text-default-500">Efficiency</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </Tab>
        
        <Tab key="jobs" title="Jobs Report">
          <div className="p-4">
            <p className="text-center text-default-500">Detailed jobs report content will appear here</p>
          </div>
        </Tab>
        
        <Tab key="revenue" title="Revenue">
          <div className="p-4">
            <p className="text-center text-default-500">Revenue report content will appear here</p>
          </div>
        </Tab>
        
        <Tab key="customers" title="Customers">
          <div className="p-4">
            <p className="text-center text-default-500">Customer report content will appear here</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
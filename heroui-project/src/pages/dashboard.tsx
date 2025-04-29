import React from "react";
import { Card, CardBody, CardHeader, Button, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link as RouterLink } from "react-router-dom";
import { JobStatusChart } from "../components/job-status-chart";
import { RecentJobsList } from "../components/recent-jobs-list";

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardBody>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-default-500 text-sm">Total Jobs</p>
                <p className="text-3xl font-bold">24</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon icon="lucide:clipboard-list" className="text-primary text-xl" />
              </div>
            </div>
            <Progress 
              value={24} 
              maxValue={30} 
              color="primary" 
              className="mt-3"
              size="sm"
            />
            <p className="text-xs text-default-500 mt-2">80% of monthly target</p>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-default-500 text-sm">In Progress</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                <Icon icon="lucide:clock" className="text-warning text-xl" />
              </div>
            </div>
            <Progress 
              value={8} 
              maxValue={24} 
              color="warning" 
              className="mt-3"
              size="sm"
            />
            <p className="text-xs text-default-500 mt-2">33% of total jobs</p>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-default-500 text-sm">Completed</p>
                <p className="text-3xl font-bold">14</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                <Icon icon="lucide:check-circle" className="text-success text-xl" />
              </div>
            </div>
            <Progress 
              value={14} 
              maxValue={24} 
              color="success" 
              className="mt-3"
              size="sm"
            />
            <p className="text-xs text-default-500 mt-2">58% completion rate</p>
          </CardBody>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Job Status</h3>
          </CardHeader>
          <CardBody>
            <JobStatusChart />
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Jobs</h3>
            <Button 
              as={RouterLink} 
              to="/jobs" 
              variant="light" 
              color="primary"
              size="sm"
            >
              View All
            </Button>
          </CardHeader>
          <CardBody>
            <RecentJobsList />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
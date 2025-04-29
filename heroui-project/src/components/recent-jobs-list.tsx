import React from "react";
import { Chip, Link } from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";

interface Job {
  id: string;
  customer: string;
  item: string;
  status: "pending" | "in_progress" | "completed";
  date: string;
}

export const RecentJobsList: React.FC = () => {
  const recentJobs: Job[] = [
    {
      id: "JOB-1234",
      customer: "John Smith",
      item: "Ford F-150 Starter",
      status: "in_progress",
      date: "2023-08-15",
    },
    {
      id: "JOB-1235",
      customer: "Sarah Johnson",
      item: "Toyota Camry Alternator",
      status: "completed",
      date: "2023-08-14",
    },
    {
      id: "JOB-1236",
      customer: "Mike Williams",
      item: "Honda Civic Starter",
      status: "pending",
      date: "2023-08-13",
    },
    {
      id: "JOB-1237",
      customer: "Emily Davis",
      item: "Chevrolet Silverado Alternator",
      status: "completed",
      date: "2023-08-12",
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

  return (
    <div className="space-y-3">
      {recentJobs.map((job) => (
        <div
          key={job.id}
          className="border border-divider rounded-lg p-3 hover:bg-content2 transition-colors"
        >
          <div className="flex justify-between items-center">
            <Link
              as={RouterLink}
              to={`/jobs/${job.id}`}
              className="font-medium"
            >
              {job.id}
            </Link>
            <Chip
              size="sm"
              color={getStatusColor(job.status) as any}
              variant="flat"
            >
              {getStatusLabel(job.status)}
            </Chip>
          </div>
          <div className="mt-1">
            <p className="text-sm">{job.customer}</p>
            <p className="text-xs text-default-500">{job.item}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
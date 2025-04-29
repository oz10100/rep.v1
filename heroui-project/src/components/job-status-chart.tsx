import React from "react";

export const JobStatusChart: React.FC = () => {
  return (
    <div className="h-64 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex gap-4 mb-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-success mr-2"></div>
            <span className="text-sm">Completed (14)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-warning mr-2"></div>
            <span className="text-sm">In Progress (8)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-danger mr-2"></div>
            <span className="text-sm">Pending (2)</span>
          </div>
        </div>
        <div className="relative w-40 h-40">
          {/* Simplified chart representation */}
          <div className="absolute inset-0 rounded-full border-8 border-success opacity-30"></div>
          <div className="absolute inset-0 rounded-full border-8 border-t-success border-r-success border-b-transparent border-l-transparent"></div>
          <div className="absolute inset-0 rounded-full border-8 border-t-warning border-r-transparent border-b-transparent border-l-transparent" style={{transform: 'rotate(135deg)'}}></div>
          <div className="absolute inset-0 rounded-full border-8 border-t-danger border-r-transparent border-b-transparent border-l-transparent" style={{transform: 'rotate(225deg)'}}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold">24</p>
              <p className="text-xs text-default-500">Total Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
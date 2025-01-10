import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', thisMonth: 15000, lastMonth: 12000, today: 8000 },
  { month: 'Feb', thisMonth: 18000, lastMonth: 15000, today: 10000 },
  { month: 'Mar', thisMonth: 18000, lastMonth: 15000, today: 10000 },
  { month: 'Apr', thisMonth: 18000, lastMonth: 15000, today: 10000 },
  { month: 'May', thisMonth: 18000, lastMonth: 15000, today: 10000 },
  { month: 'Jan', thisMonth: 15000, lastMonth: 12000, today: 8000 },
  { month: 'Feb', thisMonth: 18000, lastMonth: 15000, today: 10000 },
  { month: 'Mar', thisMonth: 18000, lastMonth: 15000, today: 10000 },
  { month: 'Apr', thisMonth: 18000, lastMonth: 15000, today: 10000 },
  { month: 'May', thisMonth: 18000, lastMonth: 15000, today: 10000 },
  { month: 'Apr', thisMonth: 18000, lastMonth: 15000, today: 10000 },
  { month: 'May', thisMonth: 18000, lastMonth: 15000, today: 10000 },
  // Add more months...
];

export const StatisticsChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Statistics</h2>
        <select className="border rounded-md px-2 py-1">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Legend />
           
            <Bar dataKey="thisMonth" fill="#3B82F6" stackId="a" barSize={40} />
            <Bar dataKey="lastMonth" fill="#93C5FD" stackId="a" barSize={40}/>
            <Bar dataKey="today" fill="#BFDBFE"  stackId="a" barSize={40}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
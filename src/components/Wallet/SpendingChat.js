import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { formatCurrency } from '../../util/formatters';




export const SpendingChart = ({ weeklySpending, data }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-600">Spent this week</p>
          <p className="text-2xl font-bold mt-1">{formatCurrency(weeklySpending)}</p>
        </div>
        <select className="px-3 py-1.5 bg-gray-100 rounded-md text-sm">
          <option>This Week</option>
          <option>Last Week</option>
          <option>Last Month</option>
        </select>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              tickFormatter={(value) => `${value/1000}k`}
            />
            <Tooltip 
              formatter={(value) => formatCurrency(value)}
              labelStyle={{ color: '#111827' }}
              contentStyle={{ 
                backgroundColor: '#18181B',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem'
              }}
              itemStyle={{ color: '#fff' }}
            />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: '#3B82F6', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#3B82F6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
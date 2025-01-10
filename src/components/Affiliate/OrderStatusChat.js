import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Completed', 'Shipping', 'Refund'],
  datasets: [
    {
      data: [65, 25, 10],
      backgroundColor: [
        'rgb(99, 102, 241)',
        'rgb(147, 51, 234)',
        'rgb(239, 68, 68)',
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'right'
    },
  },
};

export function OrderStatusChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Views by Order Status</h2>
      <div className="h-64">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
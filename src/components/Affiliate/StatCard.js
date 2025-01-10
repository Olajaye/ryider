

export function StatCard({ title, value, subtitle }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-sm text-gray-500 uppercase">{title}</p>
      <p className="text-3xl font-bold text-gray-900 my-2">{value}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}
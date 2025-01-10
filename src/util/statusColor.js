export const getStatusColor = (status) => {
  const colors = {
    Successful: 'bg-green-100 text-green-800',
    Canceled: 'bg-red-100 text-red-800',
    Pending: 'bg-yellow-100 text-yellow-800'
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};
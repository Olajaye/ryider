import { Search } from 'lucide-react'
import React, {useState} from 'react'
import { Link } from 'react-router'
import BuyCouponsPopUp from './BuyCouponsPopUp';

const Coupons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      {/* <div className='flex justify-between items-center'>
        <div className='flex mb-3 space-x-5'>
          <Link>Dashboard</Link>
          <Link to={"/dashboard/vendorcoupon"}>Courpon</Link>
        </div>

        <div>
          <button>Buy Coupon</button>
        </div>
      </div> */}
      <div className="h-screen">
        {/* Header Navigation */}
        <nav className="">
          <div className="">
            <div className="flex justify-between h-16">
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <span className={`px-3 py-2 text-sm font-medium text-gray-500`}>
                  <Link to={'/dashboard/vendordashboard'}>Dashboard</Link>
                  </span>
                  <span className={`px-3 py-2 text-sm font-medium text-white bg-teal-600 rounded`}>
                   <Link to={"/dashboard/vendorcoupon"}>Courpon</Link>
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={openModal}
                  className="bg-teal-600 text-white px-4 py-2 rounded text-sm">
                  Buy Coupon
                </button>
                {/* <div className="ml-4">
                  <User className="h-8 w-8 text-gray-400" />
                </div> */}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="bg-white">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
              placeholder="Search..."
            />
          </div>

          {/* Table */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Codes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { id: '1011', code: 'UyBnZzzYx', type: 'Activation', status: 'Active', price: '₦3,750' },
                  { id: '1011', code: 'UyBnZzzYx', type: 'Purchase and Funding', status: 'Used', price: '₦3,750' },
                  { id: '1011', code: 'UyBnZzzYx', type: 'Activation', status: 'Active', price: '₦3,750' },
                  { id: '1011', code: 'UyBnZzzYx', type: 'Purchase and Funding', status: 'Used', price: '₦3,750' },
                  { id: '1011', code: 'UyBnZzzYx', type: 'Purchase and Funding', status: 'Active', price: '₦3,750' },
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.code}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isOpen && <BuyCouponsPopUp closeModal={closeModal}/>}
    </>
  )
}

export default Coupons
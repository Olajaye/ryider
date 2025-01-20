import React from 'react'
import { StatCard } from '../../components/Affiliate/StatCard'
import { OrderStatusChart } from '../../components/Affiliate/OrderStatusChat'
import { TransactionsTable } from '../../components/Dashboard/TransactionTable'

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto flex space-x-3">
        <div className='flex-1'>
          <div>
            <StatCard
              title="Total Referral"
              value="15"
              subtitle="FRIENDS"
            />
          </div>
            

          <div className='mt-5'> 
            <StatCard
              title="Total Referral"
              value="15"
              subtitle="FRIENDS"
            />
          </div>
        </div>
      
          
        
        <div className="bg-white rounded-lg shadow-sm p-6 flex-1">
          <OrderStatusChart />
        </div>
      </div>
      <TransactionsTable />
    </div>
  )
}

export default Affiliate
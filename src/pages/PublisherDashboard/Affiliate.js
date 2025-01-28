import React from 'react'
import { StatCard } from '../../components/Affiliate/StatCard'
import { OrderStatusChart } from '../../components/Affiliate/OrderStatusChat'
import { TransactionsTable } from '../../components/Dashboard/TransactionTable'
import { AccountCard } from '../../components/Dashboard/AccountCard'
import { StatisticsChart } from '../../components/Dashboard/StatisticsChart'

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* <div className="max-w-7xl mx-auto flex space-x-3">
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
      </div> */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mb-8 mt-6">
              
        <AccountCard 
          title="TOTAL INVESTMENT" 
          amount="40,090" 
          showSeeAll 
        />
        <AccountCard 
          title="UPCOMING BILLS" 
          amount="5000" 
          subtitle="Oddo Monthly" 
          date="MAY 15TH, 2025" 
        />

        <AccountCard 
          title="UPCOMING BILLS" 
          amount="5000" 
          subtitle="Oddo Monthly" 
          date="MAY 15TH, 2025" 
        />

        <AccountCard 
          title="UPCOMING BILLS" 
          amount="5000" 
          subtitle="Oddo Monthly" 
          date="MAY 15TH, 2025" 
        />
      </div>
      <div className="mb-8">
        <StatisticsChart />
      </div>
      <TransactionsTable />
    </div>
  )
}

export default Affiliate
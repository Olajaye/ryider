import React from 'react'
import { AccountCard } from '../../components/Dashboard/AccountCard'
import { TransactionsTable } from '../../components/Dashboard/TransactionTable'

const Earnings = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mb-8">    
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
      </div>
      <TransactionsTable />
    </>
  )
} 

export default Earnings
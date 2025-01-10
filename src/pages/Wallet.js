import React from 'react'
import { TransactionsTable } from '../components/Dashboard/TransactionTable'
import { SpendingOverview } from '../components/Wallet/SpendingOverview'

const Wallet = () => {
  return (
   <>
      <div className="bg-gray-50">
        <SpendingOverview />
      </div>
      <div>
        <TransactionsTable />
      </div>
   </>
  )
}

export default Wallet
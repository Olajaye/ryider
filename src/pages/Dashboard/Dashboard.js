import React from 'react'
import { HeroSection } from '../../components/Dashboard/HeroSection'
import { AccountCard } from '../../components/Dashboard/AccountCard'
import { StatisticsChart } from '../../components/Dashboard/StatisticsChart'
import { TransactionsTable } from '../../components/Dashboard/TransactionTable'
// import { UserProfile } from '../components/UserProfile'

const Dashboard = () => {
  return (
    <>
      <div className="mb-8">
        <HeroSection />
      </div>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <AccountCard 
          title="TOTAL BALANCE" 
          amount="240,090" 
          showSeeAll 
        />
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
      </div>
      <div className="mb-8">
        <StatisticsChart />
      </div>
      <div>
        <TransactionsTable />
      </div>
    </>
  )
}

export default Dashboard
import React from 'react'
// import { HeroSection } from '../../components/Dashboard/HeroSection'
import { AccountCard } from '../../components/Dashboard/AccountCard'
// import { StatisticsChart } from '../../components/Dashboard/StatisticsChart'
import { TransactionsTable } from '../../components/Dashboard/TransactionTable'
// import { UserProfile } from '../components/UserProfile'

const Dashboard = () => {
  return (
    <>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-heroBg bg-no-repeat bg-cover rounded-lg overflow-hidden p-4  shadow-lg text-white h-36 ">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm ">TOTAL BALANCE</span>
              
              <button className="text-xs  ">SEE ALL ACCOUNTS</button>
              
            </div>
            <p className="text-2xl font-bold">$222</p>
            <p className="text-sm  mt-1">hfhf</p>
          </div>
          <div className="text-sm text-gray-500">djns</div>
        </div>

        <AccountCard 
          title="TOTAL BALANCE" 
          amount="240,090" 
          showSeeAll 
        />
      </div>


      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <AccountCard 
          title="TOTAL BALANCE" 
          amount="240,090" 
          showSeeAll 
        />

        <AccountCard 
          title="TOTAL BALANCE" 
          amount="240,090" 
          showSeeAll 
        />
      </div>
      


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
      {/* <div className="mb-8">
        <StatisticsChart />
      </div> */}
      <div>
        <TransactionsTable />
      </div>
    </>
  )
}

export default Dashboard
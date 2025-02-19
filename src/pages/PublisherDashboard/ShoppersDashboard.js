import React from 'react'
// import { HeroSection } from '../../components/Dashboard/HeroSection'
import { AccountCard } from '../../components/Dashboard/AccountCard'
// import { StatisticsChart } from '../../components/Dashboard/StatisticsChart'
import { TransactionsTable } from '../../components/Dashboard/TransactionTable'
// import { UserProfile } from '../components/UserProfile'

const ShoppersDashboard = () => {
  return (
     <>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </div>
    
    
      <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className='flex items-center bg-white shadow-md p-4 rounded-md'>
          <div className='w-10 h-10 bg-black rounded-full'></div>
          <h2 className='ps-6'>Deposit</h2>
        </div>

        <div className='flex items-center bg-white shadow-md p-4 rounded-md '>
          <div className='w-10 h-10 bg-black rounded-full'></div>
          <h2 className='ps-6'>Deposit</h2>
        </div>

        <div className='flex items-center bg-white shadow-md p-4 rounded-md '>
          <div className='w-10 h-10 bg-black rounded-full'></div>
          <h2 className='ps-6'>Deposit</h2>
        </div>
        <div className='flex items-center bg-white shadow-md p-4 rounded-md'>
          <div className='w-10 h-10 bg-black rounded-full'></div>
          <h2 className='ps-6'>Deposit</h2>
        </div>
      </div>
      
      <div>
        <TransactionsTable />
      </div>

      <div>
        <TransactionsTable />
      </div>
    </>
  )
}

export default ShoppersDashboard
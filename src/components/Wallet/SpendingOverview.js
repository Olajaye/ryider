import React from 'react';
import { BalanceCard } from './BalanceCard';
import { CardList } from './CardList';
import { SpendingChart } from './SpendingChat';


export const SpendingOverview = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <BalanceCard 
          balance={240090} 
          onSeeAll={() => console.log('See all accounts')} 
        />
        <CardList />
      </div>
      <SpendingChart 
        weeklySpending={6345}
        data={weeklySpendingData}
      />
    </div>
  );
};

const weeklySpendingData = [
  { day: 'MON', amount: 4000 },
  { day: 'TUE', amount: 800 },
  { day: 'WED', amount: 1150 },
  { day: 'THU', amount: 1800 },
  { day: 'FRI', amount: 1200 },
  { day: 'SAT', amount: 2800 },
  { day: 'SUN', amount: 2000 },
];
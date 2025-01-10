import React from 'react';
import { VisaCard } from './VisaCard';

export const CardList = () => {
  const cards = [
    {
      id: 1,
      lastFour: '1234',
      expiryDate: '06/2024',
      isDefault: true
    },
    {
      id: 2,
      lastFour: '1234',
      expiryDate: '06/2024',
      isDefault: false
    }
  ];

  return (
    <div className="space-y-3">
      {cards.map(card => (
        <VisaCard 
          key={card.id}
          lastFour={card.lastFour}
          expiryDate={card.expiryDate}
          isDefault={card.isDefault}
          onSetDefault={() => console.log('Set default', card.id)}
          onEdit={() => console.log('Edit card', card.id)}
        />
      ))}
    </div>
  );
};
import React from 'react';
import { 
  HomeIcon, WalletIcon, UsersIcon, ChatBubbleLeftIcon, 
  ChartBarIcon, QuestionMarkCircleIcon, InformationCircleIcon 
} from '@heroicons/react/24/outline';
import { Link } from 'react-router';


export const SidebarItem= ({ icon, label, active, path }) => {
  return (
    <Link to={path} className={`flex items-center px-4 py-2 cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}>
    
      <span className="w-5 h-5 mr-3">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
      
    </Link >
  );
};

export const Sidebar = () => {
  
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200">
      <div className="p-4">
        <h1 className="text-xl font-bold">Ryder</h1>
      </div>
      <nav className="mt-4">
        <SidebarItem icon={<HomeIcon />} label="Overview" path={''} active />
        <SidebarItem icon={<WalletIcon />} label="Wallet" path={'wallet'}/>
        <SidebarItem icon={<UsersIcon />} label="Affiliate" path={'affiliate'} />
        <SidebarItem icon={<ChatBubbleLeftIcon />} label="Social Task" path={'socialtask'}/>
        <SidebarItem icon={<ChartBarIcon />} label="Earning/Spending" path={'earning&spending'}/>
        <SidebarItem icon={<QuestionMarkCircleIcon />} label="Support" path={'support'}/>
        <SidebarItem icon={<ChatBubbleLeftIcon />} label="Message" path={'message'}/>
        <SidebarItem icon={<InformationCircleIcon />} label="About" path={'about'}/>
      </nav>
    </div>
  );
};
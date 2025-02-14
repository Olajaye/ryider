import React, { useState } from 'react';
import { 
  HomeIcon, WalletIcon, UsersIcon, ChatBubbleLeftIcon, 
  ChartBarIcon, QuestionMarkCircleIcon, InformationCircleIcon 
} from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import Logout from '../Logout';



export const SidebarItem= ({ icon, label, active, path }) => {
  return (
    <Link to={path} className={`flex items-center px-4 py-2 cursor-pointer transition-colors`}>
      <span className="w-5 h-5 mr-3">{icon}</span>
      <span className="text-sm font-medium" >{label}</span>
    </Link >
  );
};

export const Sidebar = () => {
  const {userData}= useAuth()
  return (
    <div className="w-64 h-screen overflow-y-hidden bg-white border-r border-gray-200">
      <div className="p-4">
        <a href='/' className="text-xl font-bold">Ryder</a>
      </div>
      <nav className="mt-4">
        {/* {userData.role === 'publisher' 
        ? 
          <> */}
            <SidebarItem icon={<HomeIcon />} label="Dashboard" path={''}  />
            {/* <SidebarItem icon={<WalletIcon />} label="Wallet" path={'wallet'}/> */}
            <SidebarItem icon={<ChatBubbleLeftIcon />} label="Social Task" path={'socialtask'}/>
            <SidebarItem icon={<UsersIcon />} label="Affiliate History" path={'affiliate'} />
            <SidebarItem icon={<ChartBarIcon />} label="Earning history" path={'earnings'}/>
            <SidebarItem icon={<ChartBarIcon />} label="Investments" path={'investment'}/>
            <SidebarItem icon={<ChartBarIcon />} label="Sales Contest" path={'salescontest'}/>
            <SidebarItem icon={<ChartBarIcon />} label="Sales Ticket" path={'salesticket'}/>
            <SidebarItem icon={<HomeIcon />} label="Vendor Dashboard" path={'vendordashboard'}/>
            <SidebarItem icon={<HomeIcon />} label="Shoppers Dashboard" path={'shoppersdashboard'}/>
            <SidebarItem icon={<QuestionMarkCircleIcon />} label="Profile" path={'profile'}/>
            <SidebarItem icon={<ChatBubbleLeftIcon />} label="Support Ticket" path={'supportticket'}/>
            <Logout/>
          {/* </>
        :
          <>
            <SidebarItem icon={<HomeIcon />} label="Overview" path={''} active />
          </>
        } */}
        
      </nav>
    </div>
  );
};